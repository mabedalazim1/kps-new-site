import FormInput from "../../components/formInput/FormInput";
import { retrieveImgSections } from './../../actions/imgSection'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddImgCatgery = ({ handleSubmit, inputs, values, onChange, addItem, setAddItem, errorMessage }) => {

    const sectionData = useSelector(state => state.imgSections)
    const dispatch = useDispatch()
  

    const fetchData = () => {
        dispatch(retrieveImgSections())
    }
    useEffect(() => {
        fetchData()
        return
    }, [])
    
    return (

        <div className="form-con">
            <form onSubmit={ handleSubmit }>
                <div>
                <label htmlFor="imageSectionId">: القسم </label>
                <select
                    className="form-select  text-center mr-5"
                    aria-label="Default select example"
                    name="imageSectionId"
                    id="imageSectionId"
                    required="inpu is required"
                >
                    <option></option>
                    {sectionData!==null && sectionData.length>0 && sectionData.map((option) => (
                        <option
                            value={ option.id }
                            key={ option.id }>
                            
                            { option.title }
                        </option>
                    )) }
                    </select>
                </div>
                
                
                { inputs.map((input) => (
                    <FormInput
                        key={ input.id }
                        { ...input }
                        value={ values[input.name] }
                        onChange={ onChange }
                    />
                ))
                }
                <div className='button-con'>
                    <button
                        type="button"
                        className='btn btn-info'
                        onClick={ () => setAddItem(!addItem) }
                    >إلغاء</button>
                    <button
                        className='btn btn-success'
                    >إضافة</button>
                </div>
                <p className='error'>{ errorMessage.message }</p>
            </form>
            <p className='error'>{ errorMessage.message }</p>
        </div>
    );
}

export default AddImgCatgery;
