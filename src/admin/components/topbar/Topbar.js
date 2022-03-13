import './topbar.css'
import React from 'react';

const Topbar = () => {
    return (
        <nav className='admin-nav'>
            <img
                className='admin-img'
                src='/assets/images/admin/admin-logo.png'
                alt='img' />
            <p className='title'>مدرسة الكوثر الخاصة</p>
        </nav>
    );
}

export default Topbar;
