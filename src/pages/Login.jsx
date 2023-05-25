import React from 'react'
import '../scssPages/login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div id='login'>
      <form noValidate>
        <div>
          <h1>Please Login to Your Account</h1>
        </div>
		  	<div>
          <Link className='no-account' to={'/Registration'}>Don't have an Account yet?</Link>
		  		<label className='email' htmlFor="email">Email*</label>
		  		<input type="email" name="email" id="email"/> 
		  	</div>
		  	<div>
          <h3>Forgot Your Password ?</h3>
		  		<label className='passw' htmlFor="passw">Password*</label>
		  		<input type="password" name="passw" id="password"/> 
		  	</div>
        <div>
          <label className="checkbox"> 
          <input type="checkbox" name="checkbox" value="checkbox"/>Please keep me logged in</label>
        </div>
        <div>
          <button className='btn-submit' type='submit'>Sign In</button>
        </div>
		  </form>
    </div>       
  )
}

export default Login