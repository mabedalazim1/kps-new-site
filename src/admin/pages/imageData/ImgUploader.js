import Progress from "../../components/progress/Progress"
import Message from "../../components/message/Message"
import { useState, useRef, useEffect } from "react"
import axios from 'axios'
import { formChange, formImgDataSubmit } from '../../services/formPost'
import './imgData.css'

const ImgUploader = ( { addImgData, validateData,imageCatogeryId, values, setValues }) => {
 
  
  

  const messageSizeError = "Image size cannot be larger than 2MB!"
  const imgBackPhath= '/assets/images/cam.png'
  const imgRef = useRef(null)
  const imgDivRef = useRef(null)
  const [message, setMessage] = useState('');
  const [file, setFile] = useState('');
  const [localFile, setLocalFile] = useState([])
  const [errorDataMsg, setErrorDataMsg] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [filename, setFilename] = useState('');
  const [backImg, setBackImg] = useState(false)
  const inputRef = useRef(null)
  const submitRef = useRef(null)

  const changImgBack = () => {
    if (message === messageSizeError) {
      imgRef.current.src = imgBackPhath
      imgDivRef.current.className = "img-con"
    } else {
      imgDivRef.current.className = "img-con local"
    }
  }

  useEffect(() => {
    changImgBack()
    return () => {
    };
  }, [message]);

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const onChangeFile = e => {
    try {
      setMessage("")
      const myFile = e.target.files
      if (myFile.length === 0) {
        setFile("")
        setBackImg(true)
        return false;
      }
      if (!myFile[0].type.match('image.*')) {
        alert(`File ${file.type} is not an image.`)
        setFile("")
        return false
      }
      if (myFile[0].size > 2090000) {
        setMessage("Image size cannot be larger than 2MB!")
        setFile("")
        return false
      }
      setFile(e.target.files[0])
      
      const formData = new FormData();
      formData.append('image', file);
      setLocalFile(URL.createObjectURL(e.target.files[0]))
    } catch (err) {
      console.log(err)
    }
  };

  const handelInputClick = async e => {

    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', file)
      addImgData.current.click()
      if (!validateData) {
        setErrorDataMsg("Add Image Catogery")
        return false
      };
      e.target.disabled = true
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
      }, 3000);
      const { fileName } = res.data;
      setFilename(fileName);
      setMessage('File Uploaded');
      // Add img Data
      values.imgUrl = fileName
      values.imageCatogeryId = imageCatogeryId
      formImgDataSubmit("imgdata", values)
      setValues([])
      localStorage.setItem("catId", imageCatogeryId)
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
    <div className="img-data">

    
    <div className="img-upload">
      <h5 className='text-center mt-3'>إضافة صورة</h5>
      <form onSubmit={ onSubmit }>
        <div className='custom-file mb-4'>
          <div
            className={ localFile.length === 0 && !backImg ? 'img-con' : 'img-con local' }
            ref={imgDivRef}>
            <img src={
              localFile.length === 0 ? imgBackPhath :
              backImg ? imgBackPhath: localFile
            }
              alt='img'
              ref={imgRef}
              onClick={ () => {
                uploadPercentage === 0 && uploadPercentage < 1
                && inputRef.current.click()
                setBackImg(false)
              } }
              className={ uploadPercentage < 1 ? "" : "img-progress" }
            />

            <input
              type='file'
              accept="image/*"
              className='custom-file-input input-file'
              id='customFile'
              onChange={  onChangeFile }
              ref={ inputRef }
            />
            { message === messageSizeError &&
              
              <p
                className="error"
                style={ { marginTop: "-30px", textAlign: "center" } }>{ message }
              </p> }
          </div>
        </div>
      </form>
      <div className='btn-con'>
        <button
          className='btn btn-success mt-4 mr-4'
          onClick={ handelInputClick }
          disabled={ localFile.length !== 0 && !backImg ? false : true }
        >
          حفظ
        </button>
        <button className='btn btn-info mt-4 mr-4'
          onClick={ () => inputRef.current.click() }
          ref={ submitRef }
          disabled={ uploadPercentage === 0 ? false : true }
        >
          اختر
        </button>
        <Progress percentage={ uploadPercentage } />

        
      </div>
{ message && message !== messageSizeError &&
          <div className="message-con">
            <Message msg={ message }
              delay={ message === "There was a problem with the server" ? 5000 : 3000 } />
          </div>
          
        }
    </div>
    </div>
  )
}


export default ImgUploader;
