import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    createImgSection,
    retrieveImgSections,

} from './../../actions/imgSection'

import FormInput from '../formInput/FormInput'
import './topic.css'
const Topic = () => {
    const btnRef = useRef(null)
    const [currentSection, setCurrentSection] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const sections = useSelector(state => state.imgSections)
    
    useEffect(() => {
        dispatch(retrieveImgSections());
    }, []);
    const { message } = useSelector(state => state.message)
    const [values, setValues] = useState({
        id: null,
        title: "",
        sectionDesc: "",
    })
    const inputs = [
        {
            id: 1,
            name: "title",
            label: "اسم التصنيف",
            errorMessage: "Title is required, ..More than 3 letters",
            placeholder: "اضف اسم مناسب للتصنيف",
            type: "text",
            pattern: "^.{2,50}$",
            required: true,
        },
        {
            id: 2,
            name: "sectionDesc",
            label: "الوصف",
            errorMessage: "Section is required, ..More than 3 letters",
            placeholder: "اضف الوصف",
            type: "text",
            pattern: "^.{2,50}$",
            required: true,
        }
    ]
    const [submitted, setSubmitted] = useState(true)
    const [addItem, setAddItem] = useState(false)
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        btnRef.current.setAttribute("disabled", true)
        const form = new FormData(e.target)
        const formDtat = Object.fromEntries(form.entries())
        const { title, sectionDesc } = formDtat
        console.log('formDtat', formDtat)
        dispatch(createImgSection(title, sectionDesc))
            .then(data => {
                setValues({
                    id: data.id,
                    title: data.title,
                    sectionDesc: data.sectionDesc,
                })
                setSubmitted(true)
                console.log(data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const newImgSection = () => {
        setSubmitted(false)
        setAddItem(true)
        setValues({})
    }

    const setActiveSection = (section, index) => {
        setCurrentSection(section);
        setCurrentIndex(index);
      }
    
    return (
        <>
        <div className="submit-form">

            { submitted ? (
                <div>
                    {addItem ?  <h6> تمت الاضافة بنجاح !</h6>: ""}
                    <button className="btn btn-success" onClick={ newImgSection }>
                        جديد
                        </button>
                      
                </div>
            ) : (
                <>
                    <div className="form-group">
                        <div className="form-con">
                            <form onSubmit={ handleSubmit }>
                                    { inputs.map((input) => (
                                        <FormInput
                                            key={ input.id }
                                            { ...input }
                                            value={ values[input.name] ||"" }
                                        onChange={ onChange }
                                    />
                                ))
                                        }
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    ref={btnRef}
                                    >
                                            حفظ</button>
                                            &nbsp; &nbsp; 
                                        <button
                                            type='button'
                                            className="btn btn-info"
                                            onClick={ () => {
                                                setSubmitted(true)
                                                setAddItem(false)
                                               
                                            } }>
                                    الغاء   
                                </button>
                                        
                            </form>
                        </div>
                    </div>
                </>
            ) }
            </div>
            
        {submitted &&  <div className="col-md-6 data-list">
                <h5>التصنيفات</h5> 
                <ul className="list-group">
                { sections && 
                    sections.map((section, index) => (
                        <li key={index}
                            className={
                                "list-group-item" +
                                (index === currentIndex ? "active" : "")
                            }
                            onClick={() => setActiveSection(section, index)}
                        >
                            {section.title}
                        </li>
                    ))
                    }
                </ul>
                <div>
                    { currentSection && <h6>{ currentSection.sectionDesc}</h6>}
                </div>
                {message}
            </div>
            }

        </>
    )
}

export default Topic;
