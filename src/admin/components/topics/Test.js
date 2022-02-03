import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createImgSection } from './../../actions/imgSection'
import FormInput from '../formInput/FormInput'

const Test = () => {
    const [values, setValues] = useState({
        id: null,
        title: "",
        sectionDesc: "",
    })
    const inputs = [
        {
            id: 1,
            name: "title",
            label: "title",
            errorMessage: "Title is required, ..More than 3 letters",
            placeholder: "Add title",
            type: "text",
            pattern: "^.{2,50}$",
            required: true,
        },
        {
            id: 2,
            name: "sectionDesc",
            label: "Section Descrption",
            errorMessage: "Section is required, ..More than 3 letters",
            placeholder: "Add Section Descrption",
            type: "text",
            pattern: "^.{2,50}$",
            required: true,
        }
    ]
    const [submitted, setSubmitted] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
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
        setValues({})
    }

    return (
        <div className="submit-form">
            { submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={ newImgSection }>
                        Add
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
                                        value={ values[input.name] }
                                        onChange={ onChange }
                                    />
                                ))
                                }
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Add</button>
                            </form>
                        </div>
                    </div>
                </>
            ) }
        </div>
    )
}

export default Test;
