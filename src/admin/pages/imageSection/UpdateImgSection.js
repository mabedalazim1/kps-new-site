import { useSelector } from "react-redux"
import React from "react"

const UpdateImgSection = ({  setCurrentItem, currentItem, }) => {
   
    const errorMessage = useSelector(state => state.message)


    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentItem({ ...currentItem, [name]: value })
    }
    
    return (
        <div className="formInput">
            <form>
                <div className="form-group">
                    <label htmlFor="title">القسم</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={ currentItem.title ||"" }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sectionDesc">الوصف</label>
                    <input
                        type="text"
                        className="form-control"
                        id="sectionDesc"
                        name="sectionDesc"
                        value={ currentItem.sectionDesc ||"" }
                        onChange={ handleInputChange }
                        
                    />
                </div>
                <p className="error">{errorMessage.message}</p>
            </form >
        </div>
    )
}

export default UpdateImgSection
