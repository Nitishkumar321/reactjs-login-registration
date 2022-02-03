import React, { useState, useEffect } from 'react';
// import './Login.css'
function Login() {
  const [employee, setEmployee] = useState({ email: '', password: '' });
  const [jwt, setJwt] = useState({ token: '', refreshToken: '' })
  const apiUrl = 'https://'

  const onChangeHandler = (e) => {
    e.persist();
    setEmployee({ ...employee, [e.target.name]: e.target.value });

  }

  const SubmitLogin = (e) => {
    e.preventDefault();
    const data = { Email:employee.email, Password: employee.password };
    console.log(data)
  }

  return (
    <div className="wrapper">
      <div className="logo"> <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="" /> </div>
      <div className="text-center mt-4 name"> TATA Steel </div>
      <form className="p-3 mt-3" onSubmit={SubmitLogin}>
        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span>
          <input type="email" name="email" value={employee.email} onChange={onChangeHandler} id="email" placeholder="Email Id" />
        </div>
        <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
          <input type="password" name="password" value={employee.password} onChange={onChangeHandler} id="password" placeholder="Password" />
        </div>
        <button className="btn mt-3">Login</button>
      </form>
      <div className="text-center fs-6"> <a href="#">Forget password?</a> or <a href="#">Sign up</a> </div>
    </div>
  );
}

export default Login;
