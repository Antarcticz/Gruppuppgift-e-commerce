import React from 'react'
import '../scssPages/login.scss'

const Login = () => {
  return (
    <div id='login'>
      <form action="LogIn">
        <div>
          <h1>Please Login to Your Account</h1>
        </div>
		  	<div>
          <h2>E-mail*</h2><h3>Don't have an Account yet?</h3>
		  		<label htmlFor="email"></label>
		  		<input type="email" name="email" id="email"/> 
		  	</div>
		  	<div>
          <h2>Password*</h2><h3>Forgot Your Password ?</h3>
		  		<label htmlFor="passw"></label>
		  		<input type="passw" name="passw" id="passw"/> 
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