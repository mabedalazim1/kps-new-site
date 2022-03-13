import React, { useState } from 'react';
import './formInput.css'
const FormInput = (props) => {
    const { label, id, onChange, errorMessage,placeholder,  ...inputProps } = props
    const [focused, setFocused] = useState(false);
    const { type } = inputProps
    const handleFocuse = (e) => {
        setFocused(true)
    }
    return (
        <div className='formInput'>
            <label>{ label } : </label>
            { type === "textarea" ?
                <textarea
                    { ...inputProps }
                    onChange={ onChange }
                    onBlur={ (e) => {
                        handleFocuse()
                        e.target.placeholder = placeholder
                    } }
                    focused={ focused.toString() }
                    onFocus={ (e) => e.target.placeholder = "" }
                    className="form-control"
                />
                : 
            <input
               {...inputProps}
                onChange={ onChange }
                placeholder={placeholder}
                onBlur={ (e) => {
                    handleFocuse()
                    e.target.placeholder = placeholder
                }}
                focused={ focused.toString() }
                onFocus= {(e)=>e.target.placeholder=""}
                className="form-control"
               
               
            />
            }

            <span>{ errorMessage }</span>
        </div>
    );
}

export default FormInput;
