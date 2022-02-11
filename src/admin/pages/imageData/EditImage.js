
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { formChange, formsubmit } from './../../services/formPost'
import FormInput from '../../components/formInput/FormInput';
import { useNavigate, useParams } from "react-router-dom";
import{ retrieveImgDataById} from './../../actions/imageData'


const EditImage = () => {


  const initialState = {
    imgDesc: "",
    imgUrl: "",
  }
  

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const errorMessage = useSelector(state => state.message)
    const imgData = useSelector(state => state.imgData)
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

    const { id } = useParams()
    const fetchData = () => {
        dispatch(retrieveImgDataById(id))
        setValues({
            imgDesc: imgData.imgDesc,
            imgUrl : imgData.imgUrl
        })
    }
   
    
    useEffect(() => {
        fetchData()
    },[])
    const handleSubmit = (e) => {
        e.preventdefault()
        formsubmit("imgdata", e)
    }

    return (
        <div>
            <div className="form-con">
                            <form onSubmit={ handleSubmit }>
                                { inputs.map((input) => (
                                    <FormInput
                                        key={ input.id }
                                        { ...input }
                                        value={ values[input.name] }
                                        onChange={ formChange }
                                    />
                                ))
                                }
                    <div className='button-con'>
                       
                         <button
                                        type="button"
                            className='btn btn-info'
                            onClick={() => navigate(-1)}
                                    >إلغاء</button>
                                   
                                    <button
                                        type="submit"
                                        className='btn btn-success'
                                    >إضافة</button>
                                </div>
                                <p className='error'>{ errorMessage.message }</p>
            </form>
            <p className='error'>{ errorMessage.message }</p>
                        </div>
            
        </div>
    );
}

export default EditImage;
