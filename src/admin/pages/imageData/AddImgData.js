import { useParams } from "react-router-dom"
import React, { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { retrieveImgCatogeries } from '../../actions/imageCategory'
import { getCustmImgCatData } from '../../actions/imgDataByCat'
import { deleteImgData } from './../../actions/imageData'
import { formChange } from '../../services/formPost'
import ImgUploader from "./ImgUploader"
import FormInput from '../../components/formInput/FormInput'
import { Button, Modal } from "react-bootstrap"
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import Loading from "../../components/loading/Loading"
import timer from "../../../services/timer"
import './imageData.css'
import './editImg.css'
import ImageGallery from "./ImageGallery"

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
            placeholder: "اضف وصفاً للصورة",
            type: "textarea",
            rows: "3",
            required: false,
        },
    ]
    const addImgData = useRef(null)

    const { id } = useParams()
    const dispatch = useDispatch()
    const errorMessage = useSelector(state => state.message)
    const imgCatData = useSelector(state => state.imgCatogryData)
    const [currentCatId, setCurrentCatId] = useState()
    const [editImage, setEditImage] = useState(false)
    const [nodata, setNoData] = useState(false)

    const [show, setShow] = useState(false)
    const [itemDesc, setItemDesc] = useState("")
    const [itemId, setItemId] = useState(0)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

   

    const  fetchData =  () => {
        if (id) {
            dispatch(retrieveImgCatogeries)
            setCurrentCatId(id)
        }
    }
    useEffect(() => {
        fetchData()
    },[])

    const updateImgData = async () => {
        dispatch(showLoading())
        dispatch(getCustmImgCatData(id))
        await timer(1000)
        dispatch(hideLoading())
        setNoData(true)
    }
    
    useEffect(() => {
        updateImgData()
    }, [editImage])

    useEffect(() => {
        dispatch(getCustmImgCatData(id))
    },[nodata])
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const onChangeInput = (e) => {
        formChange(setValues, values, e)
    }

    const handleAddClick = () => {
        updateImgData()
       setEditImage(!editImage)
    }

    const updateData = () => {
        updateImgData()
        setEditImage(!editImage)
    }

    const handleDelete = () => {
        dispatch(deleteImgData(itemId))
        updateImgData()
        setEditImage(!editImage)
        handleClose()
    }
  
    return (
        <div className="add-img-con">
            <div className="add-img-form">
                <div className="form-con">
                    <form onSubmit={ handleSubmit }>
                        { inputs.map((input) => (
                            <FormInput
                                key={ input.id }
                                { ...input }
                                value={ values[input.name] || "" }
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
                    <ImgUploader
                        addImgData={ addImgData }
                        imageCatogeryId={ id }
                        values={ values }
                        setValues={ setValues }
                        updateData={ updateData }
                    />
                </div>
            </div>
            <Loading error={ errorMessage.message } nodata={ nodata } />

            <div className="image-data">

                < ImageGallery
                    errorMessage={ errorMessage }
                    imgCatData={ imgCatData }
                    currentCatId={ currentCatId }
                    handleAddClick={ handleAddClick }
                    handleShow={ handleShow }
                    setItemDesc={ setItemDesc }
                    setItemId={ setItemId }
                />
            </div>

            {/* Modal */ }
            <Modal show={ show } onHide={ handleClose }>
            <Modal.Header closeButton>
            <Modal.Title> حذف عنصر</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            <p>سوف يتم حذف: </p>
                    <p className="modal-sub-title">&nbsp; { itemDesc } </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={ handleDelete }>
                    حذف
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
            إلغاء
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>

    )
}

export default AddImgData;
