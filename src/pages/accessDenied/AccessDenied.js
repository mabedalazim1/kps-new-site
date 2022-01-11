import './accessDenied.css'

const AccessDenied = () => {
  return (
      <div className='access-denied'>
          <img src='assets/images/logo.png' alt='' />
        <h1>
          <code>Access Denied</code>
        </h1>
        <hr />        
        <h3>
         يرجى تسجيل الدخول للمتابعة.
        </h3>
        <h3 >🚫🚫🚫</h3>
          <h6 >error code:403 forbidden</h6>
          <h4><a href='/'>الصفحة الرئيسية</a></h4>
          <h4 className='login'><a href='/login'>تسجيل الدخول</a></h4>
      </div>
  )
}

export default AccessDenied
