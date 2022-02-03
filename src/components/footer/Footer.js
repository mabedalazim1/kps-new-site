import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
              <p className="main-title">تواصل معنا</p>
            <div
                className='footer-cover'
                style={{
                    backgroundImage: `url(/assets/images/footer.jpg)`
                  }}
            >   
                <div className='overlay'>
                <div className="container contant">
                <div className="row">
                    <div className="col-md">
                        <i className="fas fa-map-marker-alt"></i>
                        <p className="sub-title">محافظة المنيا - بنى مزار</p>
                        <p className="sub-title">ش مدرسة الكوثر المتفرع من ش البحر</p>
                    </div>
                    <div className="col-md">
                        <i className="fas fa-envelope-square"></i>
                        <p className="sub-title">elkwtherpschool@gmail.com</p>
                    </div>
                    <div className="col-md">
                        <i className="fas fa-phone-square-alt"></i>
                        <p className="sub-title"> 01121427556 (002)</p>
                    </div>
                </div>
            </div>
                    
                </div>

               
                
            </div>
            <div className='footer-logo'>
                <img src='/assets/images/logo-b.png' alt='logo' />
                <p className='footer-sub-title'>مدرسة الكوثر الخاصة - بنى مزار</p>
                <p className='footer-sub-title'>جميع الحقوق محفوظة @ {(new Date().getFullYear())}</p>
                <p className='footer-sub-title'>Designed by : Mohamed Abedalazim</p>
                </div>
        </footer>
    );
}

export default Footer;
