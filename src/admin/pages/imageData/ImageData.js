import './imgData.css'
import { useDispatch, useSelector } from 'react-redux'
import Progress from '../../components/progress/Progress';
import { getImgSectionCatgorey } from './../../actions/imgCatBySection'
import { retrieveImgCatogeryById } from './../../actions/imageCategory'
import { retrieveImgSectionById } from './../../actions/imgSection'
import { useState, useEffect } from 'react';
import axios from 'axios';

const ImageData = () => {
  const catId = localStorage.getItem('catId')
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [posts, setPosts] = useState([])

  const dispatch = useDispatch()
  const imgCatogery = useSelector(state => state.imgCatogery)
  const imgSection = useSelector(state => state.imgSections)
  const sectionId = localStorage.getItem("secId")
  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
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
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    console.log(file)

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
      setTimeout(() => setUploadPercentage(0), 10000);

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
      <h4 className='text-center mt-2'>Image Data</h4>
      <form onSubmit={ onSubmit }>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={ onChange }
          />
          <label className='custom-file-label' htmlFor='customFile'>
            { filename }
          </label>
        </div>

        <Progress percentage={ uploadPercentage } />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
    </section>

  )
}
export default ImageData;
