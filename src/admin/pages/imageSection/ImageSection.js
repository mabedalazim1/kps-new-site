import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading } from 'react-redux-loading-bar'
import Loading from '../../components/loading/Loading'
import { formChange, formsubmit } from './../../services/formPost'
import {
    retrieveImgSections,
    retrieveImgSectionById,
    deleteImgSection,
    updateImgSection,
} from './../../actions/imgSection'
import './../../itemSection.css'
import UpdateImgSection from './UpdateImgSection'
import ListImgSection from './ListImgSection'
import AddImgSection from './AddImgSection'
import DeleteModal from '../../components/modal/Modal'
import Message from '../../components/message/Message'

const ImageSection = () => {
    // Form data
    const initialState = {
        title: "",
        sectionDesc: "",
    }
    const tablename = {
        mainTitle: "الأقسام",
        subTitle: "قسم",
        tableHeadTitleA: "القسم",
        tableHeadTitleB: "الوصف",
        tableHeadTitleC: "تعديل / حذف",
    }
    const [values, setValues] = useState(initialState)
    const inputs = [
        {
            id: 1,
            name: "title",
            label: "القسم",
            errorMessage: "Title is required",
            placeholder: "اضف اسم القسم",
            type: "text",
            pattern: "^[0-9a-zA-Z' '\u0600-\u06FF]{3,19}$",
            required: true,
        },
        {
            id: 2,
            name: "sectionDesc",
            label: "الوصف ",
            errorMessage: "Section Desc is required",
            placeholder: "اضف وصف للقسم",
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

    const btnUpdate = useRef(null)
    const items = useSelector(state => state.imgSections)
    const errorMessage = useSelector(state => state.message)
    const dataMessage = useSelector(state => state.dataMessage)
    const dispatch = useDispatch()

    const fetchData = () => {
        dispatch(showLoading())
        dispatch(retrieveImgSections())
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
                 items.slice(0).reverse()
        } else {
            setSortIcon("sort-item fas fa-sort-alpha-down-alt")
        }
        setSortItems(!sortItems)
    }
  
    const handleSubmit = (e) => {
        setLoadItem(!loadItem)
        formsubmit("imgsections", e)
        setValues(initialState)
        setAddItem(!addItem)
        setLoadItem(!loadItem)
    }
    const onChange = (e) => {
        formChange(setValues, values, e)
    }
    const editItemById = (id) => {
        dispatch(retrieveImgSectionById(id))
    }
    const handelDelete = () => {
        dispatch(deleteImgSection(items.id))
        setEditItem(!editItem)
        setLoadItem(true)
    }
    const handelEdit = (item) => {
        const { id, title, sectionDesc } = item
        setEditItem(!editItem)
        editItemById(id)
        setCurrentId(id)
        setDisable(false)
        setCurrentItem({
            id,
            title,
            sectionDesc,
        })
    }
    const updateItem = (id) => {
        dispatch(updateImgSection(id, currentItem))
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
            { currentId !== 0 ? <h4>تعديل  { tablename.tableHeadTitleA} </h4> :
                addItem && !editItem ? <h4>إضافة { tablename.subTitle }</h4> : <h4> { tablename.mainTitle }</h4> }
            { items.length === 0 ? (
                <Loading error={ errorMessage.message } />
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
                        <AddImgSection
                            handleSubmit={ handleSubmit }
                            onChange={ onChange }
                            inputs={ inputs }
                            values={ values }
                            addItem={ addItem }
                            setAddItem={ setAddItem }
                            errorMessage={ errorMessage }
                        />
                    ) : !editItem && items.length > 1 ? (
                        <>
                            { loadItem ? <p className='loding-item'> Loading ... </p>
                                : <p className='loding-item'></p> }
                                    <i onClick={()=>{
                                        sortItemClick()
                                    }}
                                className={ sortIcon }
                                title='Sort Data - ترتيب'
                            > </i>
                                    <ListImgSection
                                        tablename={ tablename }
                                        handelEdit={ handelEdit }
                                        items={ items }
                                        sortItems={ sortItems }
                                        
                            />
                        </>
                    ) : editItem &&
                    <div>
                        <UpdateImgSection
                            currentItem={ currentItem }
                            setCurrentItem={ setCurrentItem }
                            btnUpdate={ btnUpdate }
                        />
                        <div className='edit-control'>
                            <button
                                onClick={ () => {
                                    updateItem(items.id)
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
                                name={ items.title }
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
                    </div>
                    }
                </>
            ) }
        </div>
    )
}
export default ImageSection
