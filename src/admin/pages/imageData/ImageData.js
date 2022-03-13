import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { retrieveImgCatogeries } from '../../actions/imageCategory'
import { getCustmImgCatData, clearImgCatData } from '../../actions/imgDataByCat'
import './imageData.css'

const ImageData = () => {

    let navigate = useNavigate()
    const imgCatogery = useSelector(state => state.imgCatogery)
    const errorMessage = useSelector(state => state.message)
    const [imageCatogeryId, setImageCatogeryId] = useState("")
    const [selectError, setSelectError] = useState("")
    const selectRef = useRef(null)
    const dispatch = useDispatch()

    const fetchData = () => {
        dispatch(retrieveImgCatogeries())
        const imgCatogeryId = localStorage.getItem("imgCatogeryId")
        if (imgCatogeryId) localStorage.removeItem("imgCatogeryId")
        setImageCatogeryId(imgCatogeryId)
    }

    useEffect(() => {
        fetchData()
    }, [])


    const handleSelect = (e) => {
        const id = e.target.value
        if (id) {
            dispatch(getCustmImgCatData(id))
            setSelectError("")
            setImageCatogeryId(id)
            navigate(`/admin/imagedata/${id}`)
        } else {
            dispatch(clearImgCatData())
            setImageCatogeryId("")
            navigate(`/admin/imagedata`)
        }
    }

    return (
        <div className="image-data">
            <div className="img-data-header">
                <div className="section-form-con">
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

                        >
                            <option></option>
                            { imgCatogery !== null && imgCatogery.length > 0 && imgCatogery.map((option) => (
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

            { imageCatogeryId  &&
                <Outlet />
            }
            <p className="error">{ errorMessage.message }</p>
        </div>
    );
}
export default ImageData;
