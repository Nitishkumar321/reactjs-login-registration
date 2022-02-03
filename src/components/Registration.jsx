import React from 'react';
import './Registration.css'
function Registration() {
    return (
        <div className="wrapper register">
            <div className="logo"> <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="" /> </div>
            <div className="text-center mt-4 name"> TATA Steel </div>
            <form className="p-3 mt-3">

                <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
                            <input type="text" name="userName" id="userName" placeholder="Username" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
                            <input type="text" name="city" id="city" placeholder="City" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
                            <input type="password" name="password" id="pwd" placeholder="Password" />
                        </div>
                    </div>
                </div>

                
                <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
                    <input type="text" name="department" id="department" placeholder="department" />
                </div>
                <button className="btn mt-3">Login</button>
            </form>
            <div className="text-center fs-6"> <a href="#">Forget password?</a> or <a href="#">Sign up</a> </div>
        </div>
    );
}

export default Registration;
