import React from 'react'
import '../scssPages/login.scss'

const Login = () => {
  return (
    <div className='login'>
      <form className='form-login' action="login">
        <div>
          <h1>Please Login to Your Account</h1>
        </div>
				<div className='email'>
          <h2>E-mail*</h2><h3>Don't have an Account yet?</h3>
					<label htmlFor="email"></label>
					<input type="email" name="email" id="email"/> 
				</div>
				<div className='passw'>
          <h2>Password*</h2><h3>Forgot Your Password ?</h3>
					<label htmlFor="passw"></label>
					<input type="passw" name="passw" id="passw"/> 
				</div>
        <div className='checkbox'>
          <input type="checkbox" id="checkbox" name="checkbox" checked/>
          <label for="checkbox">Please keep me logged in</label>
        </div>
        <div>
          <button className='btn-submit' type='submit'>Submit</button>
        </div>
			</form>
    </div>
  )
}

export default Login