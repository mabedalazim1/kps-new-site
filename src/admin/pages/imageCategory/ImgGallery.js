import { useState, useEffect } from 'react'
import { getImgCatogeryData } from '../../actions/imgDataByCat'
import { useDispatch, useSelector } from 'react-redux'
import './imgGallery.css'

const ImgGallery = ({ currentItem, catogeryData }) => {
    const id = currentItem.id
    const dispatch = useDispatch()
const imgData = useSelector(state => state.imgCatogryData)
    const fetchData = () => {
         dispatch(getImgCatogeryData(id))
    }
    useEffect(() => {
        fetchData()
        console.log(catogeryData)
        console.log(currentItem)
        console.log(imgData)
    })   
    return (
        <div className='img-gallery'>
            <h5>معرض الصور</h5>
            
            <section className='img-data'>
              <AddImage /> 
            { catogeryData.map((catogery, index) => (
                    catogery.imageData.length === 0 ? <h6 key={index}>لا يوجد صور لهذا الموضوع</h6> :
                    catogery.imageData.map((image, index) => (
                        <div key={index}>
                          <p>{ image.imgDesc }</p>
                           <img src={image.imgUrl} alt="img"/>
                        </div>
                ))
            )) }
        </section>
            
            { catogeryData[0].imageData.length > 3 &&  <AddImage />}
        </div>
    );
}

const AddImage = () => {
    return (
        <div className='add-img'>
            <button
                className='btn btn-outline-success'
            >إضافة صورة</button>
    </div>
    )
    
}

export default ImgGallery;
