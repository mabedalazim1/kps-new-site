import LoadingBar from 'react-redux-loading-bar'
import './loading.css'
const Loading = ({ error, nodata=false }) => {
    return (
        <div className='loading'>
        <br /> <br />
        { !nodata && <p>Loading ....</p>}
            <LoadingBar style={ { backgroundColor: 'green' } }
                maxProgress={ 80 }
            />
        <p className='error'>{ error }</p>
    </div>
    );
}

export default Loading;
