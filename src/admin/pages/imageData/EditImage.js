import './editImg.css'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { retrieveImgCatogeries } from '../../actions/imageCategory'
import { getCustmImgCatData, clearImgCatData } from '../../actions/imgDataByCat'
import { deleteImgData } from '../../actions/imageData'
import ImgService from './../../adminServices/imgdata.service'
const EditImage = () => {

    let navigate = useNavigate()
    const imgCatogery = useSelector(state => state.imgCatogery)
    const imgCatData = useSelector(state => state.imgCatogryData)
    const errorMessage = useSelector(state => state.message)
    const [currentCatId, setCurrentCatId] = useState(null)
    const [imageCatogeryId, setImageCatogeryId]=useState("")
    const [selectError, setSelectError] = useState("")
    const selectRef = useRef(null)
    const dispatch = useDispatch()

    const fetchData = () => {
        dispatch(retrieveImgCatogeries()) 
        localStorage.removeItem("imageCatogeryId")
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    useEffect(() => {
        if (id) {
            dispatch(getCustmImgCatData(id))
        }
    },[imgCatData])
    const handleSelect = (e) => {
        const id = e.target.value
        if (id) {
            dispatch(getCustmImgCatData(id))
            setCurrentCatId(id)
            setSelectError("")
            setImageCatogeryId(id)
        } else {
            dispatch(clearImgCatData())
            setCurrentCatId(null)
            setImageCatogeryId("")
        }
    }
    const handleAddClick = () => {
        if (!currentCatId) {
            selectRef.current.focus()
            setSelectError("يرجى اختيار الموضوع")
        } else {
            localStorage.setItem("imageCatogeryId", currentCatId)
            navigate(`/admin/editimage/${currentCatId}`)
            fetchData()
        }
        
    }
    const id = localStorage.getItem("imageCatogeryId")
    const testCatId = () => {
        
        //localStorage.removeItem("imageCatogeryId")
        setImageCatogeryId(id)
      
    }
    useEffect(() => {
        testCatId()
    }, [])
    
    const handleDeleteImg = (item) => {
        const { id, imgUrl: name} = item
        try {
            dispatch(deleteImgData(id))
            ImgService.deleteImg(name)

        } catch (err) {
            console.log(err)
       }
    }
    return (
        <div className="edit-img-data">
            <div className="img-data-header">
                <div className="form-con">
                    <form >
                        <label htmlFor="imageCatogeryId">: اختر الموضوع </label>
                        <select
                            className="form-select  text-center mr-5"
                            aria-label="Default select example"
                            name="imageCatogeryId"
                            id="imageCatogeryId"
                            required="inpu is required"
                            onChange={ handleSelect }
                            ref={ selectRef }
                           // value= { localStorage.getItem("imageCatogeryId")  }
                        >
                            <option></option>
                            { imgCatogery!==null && imgCatogery.length > 0 && imgCatogery.map((option) => (
                                <option
                                    value={ option.id }
                                    key={ option.id }>
                                    { option.title }
                                </option>
                            )) }
                        </select>
                        <p className='error text-center'>{ selectError }</p>
                    </form>

                </div>

            </div>
            <div className='img-gallery'>
                { errorMessage.message ? 
                    <p className='error'>{ errorMessage.message }</p> 
                :
                    <p className='gallery-title'>معرض الصور</p>
                }
                
               
                { imgCatData.length === 0 ?
                    <>
                       { currentCatId &&  <h5 className="gallery-sub-title">لا يوجد صور لهذا الموضوع</h5>}
                       { !errorMessage.message &&  !currentCatId && 
                        <h5 className="gallery-sub-title">يرجى اختيار الموضوع</h5>}
                        { !errorMessage.message &&
                            <div className='btn-con'>
                        <button
                                className='btn btn-success btn-add'
                            onClick={ handleAddClick }>إضافة </button>
                            </div>
                        }
                    </>
                     :
                    <>
                        <p>عدد الصور : { imgCatData.length }</p>
                        <div className='btn-con'>
                        <button
                                className='btn btn-success btn-add'
                            onClick={handleAddClick}>إضافة </button>
                        </div>
                        { currentCatId &&  <h5 className="gallery-sub-title">{}</h5>}

                        <table className='table table-bordered table-hover '>
                            <thead>
                                <tr>
                                    <th scope='col' className='text-center'>م</th>
                                    <th scope='col' className='text-center'> الوصف</th>
                                    <th scope='col' className='text-center'>الصورة</th>
                                    <th scope='col' className='text-center'>تعديل</th>
                                </tr>
                            </thead>
                            <tbody>
                                { imgCatData.slice(0).reverse().map((item, index) => (
                                    <tr className='text-center' key={ index }>
                                        <th className='align-middle' scope='row'>{ index + 1 }</th>
                                        <td className='align-middle'>{ item.imgDesc }</td>
                                        <td>
                                            <img src={ `http://www.alkwtherps.com/api/static/uploads/images/${item.imgUrl}` } alt="" />
                                        </td>
                                        <td className='text-center align-middle'>
                                            <Link to={ `/admin/editimage/${item.id}` }>
                                                <i className="fas fa-info-circle icon"
                                                    title='تعديل '
                                                >
                                                </i>
                                            </Link>
                                            <i className="far fa-trash-alt del icon"
                                                title='حذف '
                                                onClick={()=> handleDeleteImg(item) }
                                                ></i>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </>
                }
            </div>
        </div>
    );
}
export default EditImage;
