import FormInput from "../../components/formInput/FormInput";

const AddImgSection = ({handleSubmit,inputs,values, onChange,addItem, setAddItem, errorMessage}) => {
    return (
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
                                <div className='button-con'>
                                    <button
                                        type="button"
                                        className='btn btn-info'
                                        onClick={ () => setAddItem(!addItem) }
                                    >إلغاء</button>
                                    <button
                                        type="submit"
                                        className='btn btn-success'
                                    >إضافة</button>
                                </div>
                                <p className='error'>{ errorMessage.message }</p>
            </form>
            <p className='error'>{ errorMessage.message }</p>
                        </div>
    );
}

export default AddImgSection;
