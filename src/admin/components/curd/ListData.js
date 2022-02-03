import './listData.css'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading } from 'react-redux-loading-bar'
import Loading from '../../components/loading/Loading'
import { formChange, formubmit } from './../../services/formPost'
import DeleteModal from '../../components/modal/Modal'
import Message from '../../components/message/Message'
import AddImgSection from '../../pages/imageSection/AddImgSection'
import UpdateImgSection from '../../pages/imageSection/UpdateImgSection'


const ListData = (props) => {
    // Get Props
    const {
        initialState,
        retrieveAllData,
        items,
        data,
        inputs,
        retrieveById,
        deleteData,
        updateItem,
        currentItem,
        setCurrentItem,
        handleSubmit,
        handelEdit,
        values,
        setValues,
        addItem,
        setAddItem,
        editItem,
        setEditItem,
        currentId,
        setCurrentId,
        loadItem,
        setLoadItem,
        fetchData,
        onChange,
        editData,
        handelDelete,
        handelUpdateItem,
        handelCancel,
    } = props

    
   

   
    const btnUpdate = useRef(null)


    const errorMessage = useSelector(state => state.message)
    const dataMessage = useSelector(state => state.dataMessage)
    const dispatch = useDispatch()

    // fetch Data
    
    
    
    return (
        <div className='container image-section'>
             { currentId !== 0 ? <h4>تعديل</h4> :
                addItem && !editItem ? <h4>إضافة قسم</h4> : <h4> الأقسام</h4> }
            
            { items.length === 0 ? (
                <Loading error={ errorMessage.message } />
            ) : (
                <>
                    { !addItem && !editItem && <button
                        className='btn btn-success btn-add'
                        onClick={ () => setAddItem(!addItem) }
                    >
                        إضافة قسم
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
                            { loadItem && <p> Loading ... </p> }
                            <table className='table table-bordered table-hover'>
                                <thead>
                                    <tr>
                                        <th scope='col' className='text-center'>م</th>
                                        <th scope='col' className='text-center'>القسم</th>
                                        <th scope='col' className='text-center'>الوصف</th>
                                        <th scope='col' className='text-center'>تعديل / حذف</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { items.map((item, index) => (
                                        <tr className='text-center' key={ index }>
                                            <th scope='row'>{ index + 1 }</th>
                                            <td onClick={ () => handelEdit(item) }
                                                className='td-title'
                                            >{ item.title }</td>
                                            <td>{ item.sectionDesc }</td>
                                            <td className='text-center'>
                                                <i
                                                    className='fas fa-info-circle'
                                                    title='تعديل / حذف'
                                                    onClick={ () => handelEdit(item) }
                                                ></i>
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                        </>

                    ) : editItem &&
                    <div>
                        <UpdateImgSection
                            currentId={ currentId }
                            currentSection={ currentItem }
                            setCurrentSection={ setCurrentItem }
                            btnUpdate={ btnUpdate }
                            sections={ items }
                        />
                        <div className='edit-control'>
                            <button
                                onClick={ () => handelUpdateItem(items.id) }
                                className='btn btn-success'
                                ref={ btnUpdate }
                            >تعديل</button>
                            <button
                                className='btn btn-primary'
                                onClick={ handelCancel }
                            >
                                رجوع</button>
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
    );
}

export default ListData;
