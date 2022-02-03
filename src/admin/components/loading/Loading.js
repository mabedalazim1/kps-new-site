import LoadingBar from 'react-redux-loading-bar'
import './loading.css'
const Loading = ({ error }) => {
    return (
        <div className='loading'>
        <br /> <br />
        <p>Loading ....</p>
        <LoadingBar style={ { backgroundColor: 'green' } } />
        <p className='error'>{ error }</p>
    </div>
    );
}

export default Loading;
