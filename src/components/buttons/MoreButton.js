import './moreButton.css'
import { Link } from 'react-router-dom'

const MoreButton = ({ link}) => {
    return (
        <Link to={ link } className='link-button'>
        <button type='button' className='more-button'>
               <span></span> -- للمزيد
            </button>
        </Link>
    )
}
MoreButton.defaultProps = {
    link:"/"
}

export default MoreButton