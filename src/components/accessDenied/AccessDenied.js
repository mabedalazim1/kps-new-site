import React from 'react';
import BackHome from '../login/backHome/BackHome';
import './accessDenied.css'
const AccessDenied = () => {
    return (
        <main className='access-denied'>
            <div className='img-logo'>
                <img src='/assets/images/logo-b.png' alt='' />
                <p> مدرسة الكوثر الخاصة</p>
            </div>
            <img
                className='denied-img'
                src='/assets/images/access_denied.png' alt=''
            />
            <p className='text'>عفوا.. ليس لديك صلاحيات لدخول هذه الصفحة!</p>
           <BackHome />
        </main>
    );
}

export default AccessDenied;
