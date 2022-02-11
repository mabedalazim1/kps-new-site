import FormInput from "../../components/formInput/FormInput";

const AddImgData = ({
    handleSubmit,
    inputs,
    values,
    onChangeInput,
    errorMessage,
    imgCatogery,
    addImgData,
    errorDataMsg,
    onChangeSlecet,
}) => {
    
    return (
        <div className="form-con">
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="imageCatogeryId">: الموضوع </label>
                    <select
                    className="form-select  text-center mr-5"
                    aria-label="Default select example"
                    name="imageCatogeryId"
                    id="imageCatogeryId"
                        required="inpu is required"
                        onChange={onChangeSlecet}
                >
                    <option></option>
                    { imgCatogery.map((option) => (
                        <option
                            value={ option.id }
                            key={ option.id }>
                            
                            { option.title }
                        </option>
                    )) }
                    </select>
                    <p className="error">{errorDataMsg}</p> 
                </div>
                { inputs.map((input) => (
                    <FormInput
                        key={ input.id }
                        { ...input }
                        value={ values[input.name] }
                        onChange={ onChangeInput }
                    />
                ))
                }
                <div className='button-con'>
                    <button
                        className='btn btn-success'
                        ref={ addImgData }
                        hidden='hidden'
                    >
                        إضافة</button>
                </div>
                <p className='error'>{ errorMessage.message }</p>
            </form>
            <p className='error'>{ errorMessage.message }</p>
        </div>
    );
}

export default AddImgData;
