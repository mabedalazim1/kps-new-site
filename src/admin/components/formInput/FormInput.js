import {useState} from 'react';

const FormInput = (props) => {
    const { label, id, onChange, errorMessage,placeholder,  ...inputProps } = props
    const [focused, setFocused] = useState(false);

    const handleFocuse = (e) => {
        setFocused(true)
    }
    return (
        <div className='formInput'>
            <label>{label} : </label>
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
                onKeyPress={ (e) => {
                    if (e.target.name === "imgDesc") {
                        if(e.key === "Enter") e.preventDefault()
                   }
                }}
            />
            <span>{ errorMessage }</span>
        </div>
    );
}

export default FormInput;
