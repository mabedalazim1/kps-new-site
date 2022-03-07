import imageCompression from 'browser-image-compression';
import Progress from "../../components/progress/Progress"
import Message from "../../components/message/Message"
import { useState, useRef, useEffect } from "react"
import axios from 'axios'
import {  formImgDataSubmit } from '../../services/formPost'
import './imageUploader.css'


const ImgUploader = ({ addImgData,
  imageCatogeryId,
  values,
  setValues,
  updateData,
}) => {

  const messageSizeError = "Image size cannot be larger than 6MB!"
  const imgBackPhath= '/assets/images/cam.png'
  const imgRef = useRef(null)
  const imgDivRef = useRef(null)
  const [message, setMessage] = useState('');
  const [file, setFile] = useState('');
  const [localFile, setLocalFile] = useState([])
  const [uploadPercentage, setUploadPercentage] = useState(0);
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
        setBackImg(true)
        return false
      }
      if (myFile[0].size > 7200000) {
        alert("Image size cannot be larger than 6MB!")
        setMessage("Image size cannot be larger than 6MB!")
        setFile("")
        setBackImg(true)
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
      const options = {
        maxSizeMB: 0.25,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      }
      const compressedFile = await imageCompression(file, options);
      const formData = new FormData();
      formData.append('image', compressedFile)
      addImgData.current.click()
      submitRef.current.disabled = true
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
      setMessage('File Uploaded');
      // Add img Data      
      fetchImgData(fileName)
      setValues([])
      localStorage.setItem("catId", imageCatogeryId)
    
    } catch (err) {
      console.log(err)
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
    
  };

  const fetchImgData = (fileName) => {
    
    formImgDataSubmit({
      imgDesc: values.imgDesc === undefined ? "": values.imgDesc,
      imgUrl: fileName,
      imageCatogeryId: imageCatogeryId ,
    })
    updateData()

}
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
            ref={ submitRef }
          disabled={ localFile.length !== 0 && !backImg ? false : true }
        >
          حفظ
        </button>
        <button className='btn btn-info mt-4 mr-4'
          onClick={ () => inputRef.current.click() }
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
