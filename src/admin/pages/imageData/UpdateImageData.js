import { useParams, useNavigate } from 'react-router'
import { useSelector, useDispatch } from "react-redux"
import { retrieveImgDataById } from './../../actions/imageData'
import { useState, useEffect } from 'react'
import { updateImgData } from './../../actions/imageData'
import { getCustmImgCatData } from '../../actions/imgDataByCat'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import FormInput from "../../components/formInput/FormInput";

import Loading from "../../components/loading/Loading"
import timer from "../../../services/timer"

import './editImg.css'

const UpdateImageData = () => {

   
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const imgData = useSelector(state => state.imgData)
    const errorMessage = useSelector(state => state.message)
    const [currentItem, setCurrentItem] = useState({})
    const [editItem, setEditItem] = useState(false)
    const [showItem, setShowItem] = useState(false)
    const [nodata, setNoData] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(retrieveImgDataById(id))
    }, [])

    useEffect(() => { 
        setLoading(!loading)
        showhData()
    }, [imgData])
    
    const showhData = async() => {
        await timer(500)
        setShowItem(true)
        setNoData(true)
        setCurrentItem(imgData)
    }
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentItem({ ...currentItem, [name]: value })
    }

    const updateItem = (id) => {
        dispatch(updateImgData(id, currentItem))
        dispatch(getCustmImgCatData(id))
        navigate(-1)
    }
    return (
        <div className="edit-img-data">
            <div className="formInput">
                <h5>تعديل صورة</h5>
                <div>
                <Loading error={ errorMessage.message } nodata={ nodata } />
                </div>
                { showItem && imgData &&
                    <form onSubmit={ (e) => e.preventDefault() }>
                        <div className="form-group">
                            <label htmlFor="title">الوصف</label>
                            <input
                                type="text"
                                className="form-control"
                                id="imgDesc"
                                name="imgDesc"
                                value={ currentItem.imgDesc ||"" }
                                onChange={ handleInputChange }
                            />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="sectionDesc">الوصف</label>
                            <input
                                type="text"
                                className="form-control"
                                id="imgUrl"
                                name="imgUrl"
                                value={ currentItem.imgUrl ||""}
                                onChange={ handleInputChange }

                            />
                        </div> */}
                        <div className='edit-control'>
                            <button
                                onClick={ () => {
                                    updateItem(currentItem.id)
                                    setEditItem(!editItem)

                                } }
                                className='btn btn-success'
                            >تعديل
                            </button>
                        </div>
                        <p className='error'>{ errorMessage.message }</p>
                    </form>
                }

            </div>
        </div>
    );
}
export default UpdateImageData;
