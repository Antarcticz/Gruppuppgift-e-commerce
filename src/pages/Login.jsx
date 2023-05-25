import React, { useState } from 'react'
import '../scssPages/login.scss'
import { Link } from 'react-router-dom'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    cPassword: ''
  })

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(data => ({ ...data, [id]: value }))
  }

  return (
    <div id='login'>
      <form noValidate>
        <div>
          <h1>Please Login to Your Account</h1>
        </div>
		  	<div>
          <Link className='no-account' to={'/Registration'}>Don't have an Account yet?</Link>
		  		<label className='email' htmlFor="email">Email*</label>
		  		<input type="email" name="email" id="email" value={formData.email} onChange={handleChange}/> 
		  	</div>
		  	<div>
          <h3>Forgot Your Password ?</h3>
		  		<label className='password' htmlFor="passw">Password*</label>
		  		<input type="password" name="passw" id="password" value={formData.password} onChange={handleChange}/> 
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