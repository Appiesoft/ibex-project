import React from "react";
import loginimg from "../static/logimg.jpg";
import './LoginUser.css'
import { NavLink } from "react-router-dom";
const LoginUser = () => {
  return (
    <div>
      <div className="container main-sav mt-5 pt-5">
        <div
          className="loginbox col-md-12 col-lg-12 col-xl-10 col-sm-12 col-xs-12 mx-auto mt-5"
          style={{ marginTop: "60px", marginBottom: "60px" }}
        >
          <h3 className="text-center d-none">The Ibex CRM</h3>
          <div className="combinedformrow">
            <div className="row">
              <div className="col-lg-12 loginContent">
                <h2>
                  Unlock Your <br />
                  Team <span style={{ color: "#17a2b8" }}>Performance</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-7 col-xl-7 leftcombined">
                <img
                  src="https://xploreseo.com/crm/originaldev/assets/img/logimg.jpg"
                  alt="Login"
                />
              </div>
              <div className="col-lg-6 col-md-5 col-xl-5">
                <div className="rightcombined">
                  <div className="card mt-5 mb-2">
                    <div className="card-body pt-4">
                      <div className="px-0 pb-0">
                        <div className="form-wrapper active" id="login">
                          <h6 className="text-uppercase mb-5 mt-3 text-center text-black font-weight-bold">
                            Welcome to{" "}
                            <span style={{ color: "#17a2b8" }}>IBEX</span>
                          </h6>
                          <form
                            class="form-horizontal "
                            novalidate="novalidate"
                          >
                            <div class="form-group">
                              <i class="fa fa-user" aria-hidden="true"></i>
                              <input
                                type="text"
                                name="username"
                                class="form-control"
                                placeholder="admin"
                                aria-invalid="false"
                              />
                            </div>
                            <div class="form-group paswrd">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                              <input
                                type="password"
                                name="password"
                                class="form-control"
                                placeholder="Password"
                                aria-invalid="false"
                              />
                            </div>

                            <div class="rmber mt-0">
                              <p class="mb-0">
                                <input
                                  type="checkbox"
                                  id="remember"
                                  name="remember"
                                  value="Bike"
                                />
                                <label for="remember" class="mb-0">
                                  Remember Me
                                </label>
                              </p>
                              <NavLink to="#forgot" class="form-change ">
                               <span className="forgot"> Forgot Password?</span>
                              </NavLink>
                            </div>
                            <NavLink to="/" className="form-change">
                            <button
                              type="submit"
                              id="btn-login"
                              class="btn btn-success mt-4 mb-0 btn-block btn-lg"
                              data-loading-text="Logging in..."
                            >
                              Login
                            </button>
                            </NavLink>
                          </form>
                        </div>
                        <div className="text-center text-muted mb-3 sign-up-controls mt-2">
                          Don't have an account?{" "}
                          <NavLink to="#create" className="">
                            <span className="form-change"> Sign Up</span>
                          </NavLink>
                        </div>
                        <div
                          className="text-center text-muted mb-3 sign-in-controls"
                          style={{ display: "none" }}
                        >
                          Already have an account?
                          <NavLink to="/" className="form-change">
                            Login
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
