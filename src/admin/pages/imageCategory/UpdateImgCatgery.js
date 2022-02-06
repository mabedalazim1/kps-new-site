import {  useSelector, useDispatch } from "react-redux"
import { retrieveImgSections } from './../../actions/imgSection'
import { useEffect } from 'react'

const UpdateImgCatgery = ({  setCurrentItem, currentItem, inputs }) => {

    const errorMessage = useSelector(state => state.message)
    const sectionData = useSelector(state => state.imgSections)
    const dispatch = useDispatch()

    const fetchData = () => {
        dispatch(retrieveImgSections())
    }
    useEffect(() => {
        fetchData()
        return
    }, [])

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentItem({ ...currentItem, [name]: value })
    }
    return (
        <div className="formInput">
            <form>
                <label htmlFor="imageSectionId">: القسم </label>
                <select
                    className="form-select  text-center mt-2 mb-2   "
                    aria-label="Default select example"
                    name="imageSectionId"
                    id="imageSectionId"
                    required="input is required"
                        value={ currentItem.imageSectionId }
                        onChange={handleInputChange}
                >
                    { sectionData.map((option) => (
                        <option
                            value={ option.id }
                            key={ option.id }>
                            
                            { option.title }
                        </option>
                    )) }
                    </select>

                <div className="form-group">
                    <label htmlFor={inputs[0].name}>: الموضوع </label>
                    <input
                        type="text"
                        className="form-control"
                        id={inputs[0].name}
                        name={inputs[0].name}
                        value={ currentItem.title ||"" }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={inputs[1].name}>: الوصف</label>
                    <input
                        type="text"
                        className="form-control"
                        id={inputs[1].name}
                        name={inputs[1].name}
                        value={ currentItem.catDesc ||"" }
                        onChange={ handleInputChange }
                        
                    />
                </div>
                <p className="error">{errorMessage.message}</p>
            </form >
        </div>
    )
}

export default UpdateImgCatgery
