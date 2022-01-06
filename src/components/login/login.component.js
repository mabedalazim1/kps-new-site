import React, { Component } from "react";
import { connect } from "react-redux";
import './login.css'

class Login extends Component {
  render() {
    return (
      <>
          <section>
            <form method="post">
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
                            placeholder="UserName" />
                          <span className="text-danger"></span>
                        </div>
                        <div className="form-label-group">
                          <input className="form-control pl-2 UserName"
                            placeholder="password" />
                          <span className="text-danger"></span>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="mybtn_m btn btn-lg btn-block text-uppercase">
                            دخول
                          </button>
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
}
export default connect()(Login)