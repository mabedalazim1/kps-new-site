import { Link, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const ImageGallery = ({
    errorMessage,
    currentCatId,
    handleShow,
    setItemDesc,
    setItemId,
}) => {

    const navigate = useNavigate()
    const imgCatData = useSelector(state => state.imgCatogryData)

    const setCurentCatId = () => {
        localStorage.setItem("imgCatogeryId", currentCatId)
    }
    return (
        <div className='img-gallery'>
            { errorMessage.message ?
                <p className='error'>{ errorMessage.message }</p>
                :
                <p className='gallery-title'>معرض الصور</p>
            }
            { imgCatData.length === 0 ?
                <>
                    { currentCatId && <h5 className="gallery-sub-title">لا يوجد صور لهذا الموضوع</h5> }
                    { !errorMessage.message && !currentCatId &&
                        <h5 className="gallery-sub-title">يرجى اختيار الموضوع</h5> }
                </>
                :
                <>
                    <div className='gallery-cat-data'>
                        <p>عدد الصور : { imgCatData.length }</p>
                        <p className='gallery-cat-title'> { imgCatData[0].imageCatogery.title }</p>
                    </div>
                    { currentCatId && <h5 className="gallery-sub-title">{ }</h5> }

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
                                    <td className='align-middle td-title'
                                        onClick={ () => {
                                            navigate(`/admin/updateimgdata/${item.id}`)
                                            setCurentCatId()
                                        } }>
                                       
                                            { item.imgDesc }
                                       
                                    </td>
                                    <td>
                                        <img src={ `${process.env.REACT_APP_SERVER_URL}/static/uploads/images/${item.imgUrl}` } alt="" />
                                    </td>
                                    <td className='text-center align-middle'>
                                        <Link to={ `/admin/updateimgdata/${item.id}` }>
                                            <i className="fas fa-info-circle icon"
                                                title='تعديل '
                                                onClick={ () => {
                                                    setCurentCatId()
                                                } }
                                            >
                                            </i>
                                        </Link>
                                        <i className="far fa-trash-alt del icon"
                                            title='حذف '
                                            onClick={ () => {
                                                handleShow()
                                                if (item.imgDesc === "") {
                                                    setItemDesc("بدون عنوان")
                                                } else {
                                                    setItemDesc(item.imgDesc)
                                                }
                                                setItemId(item.id)
                                            } }
                                        >
                                        </i>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>

                </>
            }
        </div>
    );
}

export default ImageGallery;
