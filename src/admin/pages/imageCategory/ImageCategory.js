import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import Loading from '../../components/loading/Loading'
import { formChange, formsubmit } from '../../services/formPost'
import {
    retrieveImgCatogeries,
    retrieveImgCatogeryById,
    deleteImgCatogery,
    updateImgCatogery,
} from './../../actions/imageCategory'
import { getImgCatogeryData } from '../../actions/imgDataByCat'
import { retrieveImgSections } from '../../actions/imgSection'
import {
    getImgSectionCatgorey,
} from './../../actions/imgCatBySection'
import './../../itemSection.css'
import AddImgCatgery from './AddImgCatgery'
import ListImgCatgery from './ListImgCatgery'
import UpdateImgCatgery from './UpdateImgCatgery'
import DeleteModal from '../../components/modal/Modal'
import Message from '../../components/message/Message'
import ImgGallery from './ImgGallery'
import { useNavigate } from 'react-router-dom'

const ImageCategory = () => {
    // Form data
    const initialState = {
        title: "",
        catDesc: "",
    }

    const tablename = {
        mainTitle: "الموضوعات",
        subTitle: "موضوع",
        tableHeadTitleA: "الموضوع",
        tableHeadTitleB: "الوصف",
        tableHeadTitleC: "القسم",
        tableHeadTitleD: "تعديل / حذف",
    }
    const [values, setValues] = useState(initialState)
    const inputs = [
        {
            id: 1,
            name: "title",
            label: "الموضوع",
            errorMessage: "Object is required",
            placeholder: "اضف اسم الموضوع",
            type: "text",
            pattern: "^[0-9a-zA-Z' '\u0600-\u06FF]{3,19}$",
            required: true,
        },
        {
            id: 2,
            name: "catDesc",
            label: "الوصف ",
            errorMessage: "Object Desc is required",
            placeholder: "اضف وصف للموضوع",
            type: "text",
            required: true
        },
    ]

    const [addItem, setAddItem] = useState(false)
    const [editItem, setEditItem] = useState(false)
    const [loadItem, setLoadItem,] = useState(false)
    const [currentItem, setCurrentItem] = useState()
    const [currentId, setCurrentId] = useState(0)
    const [sortIcon, setSortIcon] = useState("sort-item fas fa-sort-alpha-down-alt")
    const [sortItems, setSortItems] = useState(false)
    const [disable, setDisable] = useState(false)
    const [nodata, setNoData] = useState(false)

    const btnUpdate = useRef(null)
    const catItems = useSelector(state => state.imgCatogery)
    const catSection = useSelector(state => state.imgCatBySection)
    const errorMessage = useSelector(state => state.message)
    const dataMessage = useSelector(state => state.dataMessage)
    const catogeryData = useSelector(state => state.imgCatogryData)
    const dispatch = useDispatch()

    const testTable =()=>{
        setInterval(() => {
            setNoData(true)
            setLoadItem(false)
            dispatch(hideLoading())
        }, 5000)
    }

    const fetchData = () => {
        dispatch(showLoading())
        dispatch(retrieveImgSections())
        dispatch(retrieveImgCatogeries())
        dispatch(getImgSectionCatgorey())
        testTable()
    }
    useEffect(() => {
        fetchData()
        return
    }, [])

    useEffect(() => {
        const timer = setTimeout(() =>
        setLoadItem(false), 1000)
        fetchData()
        return () => clearTimeout(timer);
    }, [loadItem]);


    const sortItemClick = () => {
        if (sortIcon === "sort-item fas fa-sort-alpha-down-alt") {
            setSortIcon("sort-item fas fa-sort-alpha-up")
            catItems.slice(0).reverse()
        } else {
            setSortIcon("sort-item fas fa-sort-alpha-down-alt")
        }
        setSortItems(!sortItems)
    }

    const handleSubmit = (e) => {
        setLoadItem(!loadItem)
        formsubmit("imgcatogery", e)
        setValues(initialState)
        setAddItem(!addItem)
        setLoadItem(!loadItem)
    }

    const onChange = (e) => {
        formChange(setValues, values, e)
    }
    const editItemById = (id) => {
        dispatch(retrieveImgCatogeryById(id))
        dispatch(getImgCatogeryData(id))

    }
    const handelDelete = () => {
        dispatch(deleteImgCatogery(catItems.id))
        setEditItem(!editItem)
        setLoadItem(true)
    }
    const handelEdit = (item) => {
        const { id, title, catDesc, imageSectionId } = item
        setEditItem(!editItem)
        editItemById(id)
        setCurrentId(id)
        setDisable(false)
        setCurrentItem({
            id,
            title,
            catDesc,
            imageSectionId,
        })
        localStorage.setItem("secId", imageSectionId )
    }
    const updateItem = (id) => {
        dispatch(updateImgCatogery(id, currentItem))
    }
    const handelCancel = () => {
        fetchData()
        setEditItem(!editItem)
        setLoadItem(true)
        setCurrentId(0)
    }

    return (
        <div className='container item-section'>
            { errorMessage.message }
            { currentId !== 0 ? <h4>تعديل { tablename.tableHeadTitleA }</h4> :
                addItem && !editItem ? <h4>إضافة { tablename.subTitle }</h4> : <h4> { tablename.mainTitle }</h4> }
            { catItems.length === 0 ? (
                <>
                <Loading error={ errorMessage.message } nodata={ nodata } />
                { !errorMessage.message && nodata &&
                <AddImgCatgery
                    handleSubmit={ handleSubmit }
                    onChange={ onChange }
                    inputs={ inputs }
                    values={ values }
                    addItem={ addItem }
                    setAddItem={ setAddItem }
                    errorMessage={ errorMessage }
                />
                    }
                    </>
            ) : (
                <>
                    { !addItem && !editItem && <button
                        className='btn btn-success btn-add'
                        onClick={ () => setAddItem(!addItem) }
                    >
                        إضافة { tablename.subTitle }
                    </button>
                    }
                    { addItem && !editItem ? (
                        <AddImgCatgery
                            handleSubmit={ handleSubmit }
                            onChange={ onChange }
                            inputs={ inputs }
                            values={ values }
                            addItem={ addItem }
                            setAddItem={ setAddItem }
                            errorMessage={ errorMessage }
                        />
                    ) : !editItem && catItems.length > 0 ? (
                        <>
                            { loadItem ? <p className='loding-item'> Loading ... </p>
                                : <p className='loding-item'></p> }
                            <i onClick={ () => {
                                sortItemClick()
                            } }
                                className={ sortIcon }
                                title='Sort Data - ترتيب'
                            > </i>
                            <ListImgCatgery
                                tablename={ tablename }
                                handelEdit={ handelEdit }
                                catSection={ catSection }
                                sortItems={ sortItems }

                            />
                        </>
                    ) : editItem &&
                    <div>
                        <UpdateImgCatgery
                            currentItem={ currentItem }
                            setCurrentItem={ setCurrentItem }
                            btnUpdate={ btnUpdate }
                            inputs={ inputs }
                        />
                        <div className='edit-control'>
                            <button
                                onClick={ () => {
                                    updateItem(catItems.id)
                                    setDisable(true)
                                } }
                                className='btn btn-success'
                                ref={ btnUpdate }
                                disabled={ disable }
                            >تعديل
                            </button>
                            <button
                                className='btn btn-primary'
                                onClick={ handelCancel }
                            >
                                رجوع
                            </button>
                            <DeleteModal
                                handelDelete={ handelDelete }
                                name={ catItems.title }
                            />
                        </div>
                        { dataMessage.message &&
                            <div
                                style={ {
                                    width: "70%",
                                    margin: "20px auto",
                                    textAlign: "center"
                                } }
                            >
                                <Message
                                    msg={ dataMessage.message }
                                    delay={ 2000 }
                                    handelCancel={ handelCancel }
                                />
                            </div>
                        }
                        {/* <ImgGallery
                            catogeryData={ catogeryData }
                            currentItem={ currentItem }
                            handelCancel={ handelCancel }
                        /> */}
                        <div className='img-gallery'>
                            <h5>معرض الصور</h5>

                            <section className='img-data'>
                                <AddImage />
                                { !catogeryData ? <h6 >لا يوجد صور لهذا الموضوع</h6> : catogeryData.map((catogery, index) => (

                                    <div key={ index }>
                                        <p>{ catogery.imgDesc }</p>
                                        <p>{ catogery.imgUrl }</p>
                                        <img src={  `http://www.alkwtherps.com/api/static/uploads/images/${catogery.imgUrl}`} alt="img" />
                                    </div>

                                )) }
                            </section>
                            { catogeryData.length > 3 &&
                                <>
                                    <AddImage />
                                    <button
                                        className='btn btn-primary'
                                        onClick={ handelCancel }
                                    >
                                        رجوع
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                    }
                </>
            ) }
        </div>
    )
}
const AddImage = () => {
    const navigate = useNavigate()
    const addHandel = () => {
        navigate('/admin/addimage')
    }
    return (
        <div className='add-img'>
            <button
                className='btn btn-outline-success'
                onClick={ addHandel }
            >إضافة صورة</button>
        </div>
    )

}
export default ImageCategory
