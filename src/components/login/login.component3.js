import './login.css'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

import { login, logout } from '../../actions/auth'

const required = value => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}
const Login = (props) => {
  
  const form = useRef()
  const checkBtn = useRef()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { isLoggedIn } = useSelector(state => state.auth)
  const { message } = useSelector(state => state.message)

  const dispatch = useDispatch()

  
  
  const onChangeUsername = e => {
    const username = e.target.value
    setUsername(username)
  }

  const onChangePassword = e => {
    const password = e.target.value
    setPassword(password)
  }

  const  handellogin = e => {
    e.preventDefault()

    setLoading(true)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push('/')
          window.location.reload()
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }

  if (isLoggedIn) {
    return <Navigate to='/' />
  }

    return (
      <>
          <section>
            <Form onSubmit={handellogin} ref={form}>
              <div className="container con-signin">
                <div className="row">
                  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                      <div className="card-body  mt-2 card-con">
                        <h4 className="kps">K P S</h4>
                        <h5 className="card-title text-center">تسجيل الدخول</h5>
                        <hr />
                        <div className="form-label-group">
                          <Input className="form-control pl-2 UserName"
                          placeholder="UserName"
                          name="username"
                          value={ username }
                          onChange={ onChangeUsername }
                          validations={[required]}
                        />

                          <span className="text-danger"></span>
                        </div>
                        <div className="form-label-group">
                          <Input className="form-control pl-2 UserName"
                          placeholder="password"
                          type="password"
                          name="password"
                          value={ password }
                          onChange={ onChangePassword }
                          validations={[required]}
                        />

                          <span className="text-danger"></span>
                        </div>
                        <div className="form-group">
                        <button
                          type="submit"
                          className="mybtn_m btn btn-lg btn-block text-uppercase"
                          disabled={loading}
                        >
                           {loading && (
                <span className="spinner-border spinner-border-sm"></span>
                                              ) }
                            دخول
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>

          </section>
      </>
    )
  }


export default Login