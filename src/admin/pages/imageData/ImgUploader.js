import Progress from "../../components/progress/Progress"
import Message from "../../components/message/Message"
import { useRef, useEffect } from "react"
const ImgUploader = ({
  onSubmit,
  onChangeFile,
  handelInputClick,
  localFile,
  backImg,
  setBackImg,
  uploadPercentage,
  inputRef,
  submitRef,
  message,
}) => {
  const messageSizeError = "Image size cannot be larger than 2MB!"
  const imgBackPhath= '/assets/images/cam.png'
  const imgRef = useRef(null)
  const imgDivRef = useRef(null)

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

  return (
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
  )
}


export default ImgUploader;
