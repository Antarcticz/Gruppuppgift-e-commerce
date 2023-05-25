import React from 'react'
import '../scssPages/registration.scss'

const Registration = () => {
  return (
    <div className='registration-page'>
      <div className="reg-form">
        <form action="">
          <p className='registerText'>Please Register Your new Account</p>

          <div className="form-reg-group reg-row">
            <label htmlFor="fName">First Name*</label>
            <input type="text" name='fName' />
          </div>

          <div className="form-reg-group reg-row">
            <label className='mg-left' htmlFor="lName">Last Name*</label>
            <input type="text" name='lName' className='mg-left' />
          </div>

          <div className="form-reg-group">
            <label htmlFor="email">E-mail*</label>
            <input type="text" name='email' className="input-full-width" />
          </div>

          <div className="form-reg-group">
            <label htmlFor="password">Password*</label>
            <input type="password" name='password' className="input-full-width" />
          </div>

          <div className="form-reg-group">
            <label htmlFor="cPassword">Confirm Password*</label>
            <input type="text" name='cPassword' className="input-full-width" />
          </div>


          <div className="terms">
            <input type="checkbox" id='check' />
            <label className='terms-label' htmlFor="checkbox">I have read and accepts the terms and agreements</label>
          </div>
          <button className='submit'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Registration