import { useDispatch, useSelector } from 'react-redux'
import { retrieveImgCatogeryById, retrieveImgCatogeries } from './../../actions/imageCategory'
import { retrieveImgSectionById, retrieveImgSections } from './../../actions/imgSection'
import { getImgCatogeryData, getCustmImgCatData, clearImgCatData } from '../../actions/imgDataByCat'
import { useState, useEffect, useRef } from 'react';
import { formChange, formImgDataSubmit } from '../../services/formPost'
import axios from 'axios';
import AddImgData from './AddImgData';
import ImgUploader from './ImgUploader';
import './imgData.css'
import './../../itemSection.css'
import ListImgData from './ListImgData';

const ImageData = () => {

  const tablename = {
    mainTitle: "معرض الصور",
    subTitle: "صورة",
    tableHeadTitleA: "الصورة",
    tableHeadTitleB: "تعديل / حذف",
}
  // Form data
  const initialState = {
    imgDesc: "",
    imgUrl: "",
  }
  const [values, setValues] = useState(initialState)
  const inputs = [
    {
      id: 1,
      name: "imgDesc",
      label: "وصف الصورة",
      errorMessage: "Object is required",
      placeholder: "اضف وصف للصورة",
      type: "text",
    },
  ]
    const [editItem, setEditItem] = useState(false)
    const [loadItem, setLoadItem,] = useState(false)
    const [currentItem, setCurrentItem] = useState()
    const [currentId, setCurrentId] = useState(0)
    const [sortIcon, setSortIcon] = useState("sort-item fas fa-sort-alpha-down-alt")
    const [sortItems, setSortItems] = useState(false)
    const [disable, setDisable] = useState(false)

  const [addItem, setAddItem] = useState(false)
  const catId = localStorage.getItem('catId')
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const [message, setMessage] = useState('');
  const [errorDataMsg, setErrorDataMsg] = useState('');
  const [validateData, setValidateData] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [localFile, setLocalFile] = useState([])
  const [backImg, setBackImg] = useState(false)
  const inputRef = useRef(null)
  const submitRef = useRef(null)
  const addImgData = useRef(null)

  const dispatch = useDispatch()
  const imgCatogery = useSelector(state => state.imgCatogery)
  const imgSection = useSelector(state => state.imgSections)
  const imgData = useSelector(state => state.imgCatogryData)
  const errorMessage = useSelector(state => state.message)
  const catSection = useSelector(state => state.imgCatBySection)
  const sectionId = localStorage.getItem("secId")

  const fetchData = () => {
    if (catId) {
      dispatch(retrieveImgCatogeryById(catId))
      dispatch(retrieveImgSectionById(sectionId))
    } else {
      dispatch(retrieveImgCatogeries())
      dispatch(retrieveImgSections())
    }
  }
  useEffect(() => {
    fetchData()
    return {
    }
  }, [catId])

  const onChangeInput = (e) => {
    formChange(setValues, values, e)
  }
  const onChangeSlecet = (e) => {
    formChange(setValues, values, e)
    setErrorDataMsg("")
    setValidateData(true)
    editItemById(e.target.value)
    console.log(e.target.value)
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

  const onSubmit = (e) => {
    e.preventDefault();
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setValidateData(true)
  }
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
      formImgDataSubmit("imgdata", values)
      setValues(initialState)

    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
    
  };
  const editItemById = (id) => {
    if (id) {
      dispatch(getCustmImgCatData(id))
    } else {
      dispatch(clearImgCatData())
  }
}
  const handelEdit = (item) => {
    const { id, title, catDesc, imageSectionId } = item
    setEditItem(!editItem)
    editItemById(id)
    setCurrentId(id)
    setDisable(false)
    setCurrentItem({
        id,
        title,
        catDesc,
        imageSectionId,
    })
}
  return (
    <section className='container item-section img-data'>
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
            <h6>العنوان</h6>
            <label className='text' >{ imgCatogery.catDesc } </label>
          </div>
        </div>
        ) : (
          <>
            <AddImgData
              imgSection={ imgSection }
              imgCatogery={ imgCatogery }
              handleSubmit={ handleSubmit }
              inputs={ inputs }
              values={ values }
              onChangeInput={ onChangeInput }
              addItem={ addItem }
              setAddItem={ setAddItem }
              errorMessage={ errorMessage }
              addImgData={ addImgData }
              setValidateData={ setValidateData }
              validateData={ validateData }
              filename={filename}
              onChangeSlecet={ onChangeSlecet }
              errorDataMsg={ errorDataMsg }
            />
          </>
        ) }
      <ImgUploader
        onSubmit={ onSubmit }
        onChangeFile={ onChangeFile }
        handelInputClick={ handelInputClick }
        localFile={ localFile }
        backImg={ backImg }
        setBackImg={ setBackImg }
        uploadPercentage={ uploadPercentage }
        inputRef={ inputRef }
        submitRef={ submitRef }
        message={ message }
      />
      { errorMessage.message }
      
      <ListImgData
        tablename={ tablename }
        handelEdit={ handelEdit }
        imgData={ imgData }
        sortItems={ sortItems } />
      <h3>Edit Image</h3>
      {editItem.id}
    </section>

  )

}

export default ImageData;
