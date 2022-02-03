import './topbar.css'

const Topbar = () => {
    return (
        <nav className='admin-nav'>
            <img
                className='admin-img'
                src='/assets/images/admin/admin-logo.png'
                alt='img' />
            <p className='title'>KPS Admin Panel</p>
        </nav>
    );
}

export default Topbar;
