import './imgData.css'
import { useDispatch, useSelector } from 'react-redux'
import Progress from '../../components/progress/Progress';
import { getImgSectionCatgorey } from './../../actions/imgCatBySection'
import Message from '../../components/message/Message';
import { retrieveImgCatogeryById } from './../../actions/imageCategory'
import { retrieveImgSectionById } from './../../actions/imgSection'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ImageData = () => {
  const catId = localStorage.getItem('catId')
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [localFile, setLocalFile] = useState([])
  const [backImg, setBackImg] = useState(false)
  const inputRef = useRef(null)
  const submitRef = useRef(null)

  const dispatch = useDispatch()
  const imgCatogery = useSelector(state => state.imgCatogery)
  const imgSection = useSelector(state => state.imgSections)
  const sectionId = localStorage.getItem("secId")
  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    const formData = new FormData();
    formData.append('image', file);

    setLocalFile(URL.createObjectURL(e.target.files[0]))
    
  };

  const fetchData = () => {
    if (catId) {
      dispatch(retrieveImgCatogeryById(catId))
      dispatch(retrieveImgSectionById(sectionId))
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
  }
  const handelInputClick = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file)

    try {
      const baseURL = process.env.REACT_APP_SERVER_URL
      const user = JSON.parse(localStorage.getItem('user'));
      const res = await axios.post(`${baseURL}uploadimages`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-access-token': user.accessToken
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });

      // Clear percentage
      setTimeout(() => {
        setUploadPercentage(0)
        setBackImg(!backImg)
      }, 1000);
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
      
    }
  };
  return (
    <section className='img-data'>
      { catId ?
        (<div className='img-data-header'>
          <div>
            <h6>القسم</h6>
            <label className='text' >{ imgSection.title } </label>
          </div>
          <div>
            <h6>الموضوع</h6>
            <label className='text' >{ imgCatogery.title } </label>
          </div>
          <div>
            <h6>الوصف</h6>
            <label className='text' >{ imgCatogery.catDesc } </label>
          </div>


        </div>
        ) : (
          <>
            No
          </>
        ) }
      <h5 className='text-center mt-3'>إضافة صورة</h5>
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <div className={ localFile.length ===0 ? 'img-con' : 'img-con local'}>
            <img src={
              localFile.length === 0 ? '/assets/images/cam.png':
              backImg ? '/assets/images/cam.png' : localFile
            }
              alt='img'
              onClick={ () => {
                uploadPercentage === 0 && inputRef.current.click()
                setBackImg(false)
              } }
            />
             <input
            type='file'
            className='custom-file-input input-file'
            id='customFile'
            onChange={ onChange }
             ref={ inputRef }
          />
          </div>
         
         
        </div>
      </form>
      <div className='btn-con'>
            <button
          className='btn btn-success mt-4 mr-4'
          onClick={ handelInputClick }
          disabled={ localFile.length !== 0 && !backImg  ? false : true}
        >
          حفظ
        </button>
        <button className='btn btn-info mt-4 mr-4'
          onClick={ () => inputRef.current.click() }
          ref={ submitRef }
          disabled={ uploadPercentage === 0 ? false : true}
        >
          اختر 
        </button>
        <Progress percentage={ uploadPercentage } />
        
        { message &&
          <Message msg={ message } delay={ 1000 } />
        }
      </div>
      
    </section>

  )
}
export default ImageData;
