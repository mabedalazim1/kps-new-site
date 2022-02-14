import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { retrieveImgCatogeryById } from '../../actions/imageCategory'
import { formChange } from '../../services/formPost'
import ImgUploader from "./ImgUploader"
import FormInput from '../../components/formInput/FormInput'
import './imgData.css'

const AddImgData = () => {
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
          placeholder: "اضف وصفاً للصورة",
            type: "text",
            required: false,
        },
    ]
    const addImgData = useRef(null)

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const imgCatogery = useSelector(state => state.imgCatogery)
    const errorMessage = useSelector(state => state.message)

    const fetchData = () => {
        if (id) {
            dispatch(retrieveImgCatogeryById(id))
            localStorage.setItem("imageCatogeryId",id ) 
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const onChangeInput = (e) => {
        formChange(setValues, values, e)
    }
    return (
        <div className="add-img-con">
           <div className="add-img-con-title">
            <h5 className="form-title"> {imgCatogery.title} </h5>
                <h5 className="form-sub-title">إضافة صورة</h5>
            </div>
            <div className="form-con">
                <form onSubmit={handleSubmit }>
                { inputs.map((input) => (
                    <FormInput
                        key={ input.id }
                        { ...input }
                        value={ values[input.name]|| "" }
                        onChange={ onChangeInput }
                    />
                ))
                }
                <div className='button-con'>
                    <button
                        className='btn btn-success'
                        ref={ addImgData }
                        hidden='hidden'
                    >
                        إضافة</button>
                </div>
                <p className='error'>{ errorMessage.message }</p>

                </form>
               
            
            </div>
            <ImgUploader
                addImgData={ addImgData }
                imageCatogeryId={ id }
                values={ values }
                setValues={ setValues }
            />
            <button
                className="btn btn-primary btn-back"
                onClick={()=>navigate(-1)}>رجوع</button>
        </div>
        
    )
}

export default AddImgData;
