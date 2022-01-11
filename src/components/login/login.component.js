import './login.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import useForm from './../../hooks/useForm'
import validate from './../../helpers/validateInfo'
import { login } from '../../actions/auth'
import history from '../../helpers/history'

const Login = (props) => {
  console.log(history)
  const  { handleChange, handleSubmit, values, errors} = useForm(true,validate)
  const [loading, setLoading] = useState(false)
  const { isLoggedIn } = useSelector(state => state.auth)
  const { message } = useSelector(state => state.message)
  const dispatch = useDispatch()

  const handellogin = e => {
    handleSubmit(e)
    if (errors.username === undefined) {
      setLoading(true)
    dispatch(login(values.username, values.password))
      .then(() => {
      console.log(history.location)
      // history.push('/')
      // window.location.reload()
    })
    .catch(() => {
      setLoading(false)
    })
  }else {
    setLoading(false)
    }
  }

  if (isLoggedIn) {
    return <Navigate to='/' />
  }
  
  return (
    <>
    <section>
            <form  onSubmit={handellogin}>
              <div className="container con-signin">
                <div className="row">
                  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                      <div className="card-body  mt-2 card-con">
                        <h4 className="kps">K P S</h4>
                        <h5 className="card-title text-center">تسجيل الدخول</h5>
                        <hr />
                        <div className="form-label-group">
                          <input className="form-control pl-2 UserName"
                         type='text'
                         name='username'
                         placeholder='Enter your username'
                         value={values.username}
                         onChange={handleChange}
                          
                        />
                          <span className="text-danger">{errors.username && <p>{errors.username}</p>}</span>
                        </div>
                        <div className="form-label-group">
                          <input className="form-control pl-2 UserName"
                          placeholder="password"
                          type="password"
                          name="password"
                          value={ values.password }
                          onChange={ handleChange }
                          autoComplete=''
                        />
                          <span className="text-danger">{errors.password && <p>{errors.password}</p>}</span>
                        </div>
                        <div className="form-group">
                        <button
                          type="submit"
                          className="mybtn_m btn btn-lg btn-block text-uppercase"
                          disabled={loading}
                        >
                           {loading && (
                <span className="spinner-border spinner-border-sm">  </span>
                                              ) }
                            دخول
                      </button>
                      {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </form>
    </section>
  </>
    )
  }


export default Login