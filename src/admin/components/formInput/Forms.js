import { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import  './formInput.css'

const Forms = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        fullName: "",
        sth:""
    })
    const inputs = [
        {
            id: 1,
            name: "imgUrl",
            label: "imgUrl",
            errorMessage:"imgUrl",
            placeholder: "Add imgUrl",
            type: "text",
            pattern:"^[A-Za-z0-9]{3,19}$",
            required: true,
        },
        {
            id: 2,
            name: "imgDesc",
            label: "imgDesc",
            errorMessage:"imgDesc",
            placeholder: "Add imgDesc",
            type: "text",
            required: true
        },
        {
            id: 3,
            name: "title",
            label: "title",
            errorMessage:"Full title",
            placeholder: "Add title",
            type:"text"
        },
        {
            id: 4,
            name: "sectionDesc",
            label: " sectionDesc",
            errorMessage:"Some sectionDesc",
            placeholder: "Add sectionDesc",
            type:"text"
        },
        {
            id: 5,
            name: "catDesc",
            label: " catDesc",
            errorMessage:"Some catDesc",
            placeholder: "Add catDesc",
            type:"text"
        },
        {
            id: 6,
            name: "imageSectionId",
            label: " imageSectionId",
            errorMessage:"SimageSectionId",
            placeholder: "Add imageSectionId",
            type:"text"
        }
    ]
    let option = {}
    const handleSubmit = (e) => {
        e.preventDefault();
       
        const data = new FormData(e.target)
        const add = Object.fromEntries(data.entries())
        console.log(Object.fromEntries(data.entries()))
        const user = JSON.parse(localStorage.getItem('user'));
       
        
        option = {
            headers: {
                'x-access-token': user.accessToken ,
            }
               
            }
        
        const API_URL = process.env.REACT_APP_SERVER_URL
        axios.post(API_URL + 'imgcatogery', add,option)
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <div className="form-con">
            <form onSubmit={handleSubmit}>
                { inputs.map((input) => (
                    <FormInput
                        key={ input.id }
                        { ...input }
                        value={ values[input.name] }
                        onChange={onChange}
                    />
                ))
                }
                
                <button type="submit">Add</button>
        </form>
        </div>
        
    );
}

export default Forms;
