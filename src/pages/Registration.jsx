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
        <input type="text" name='fName'/>
      </div>

      <div className="form-reg-group reg-row">
        <label className='mg-left' htmlFor="lName">Last Name*</label>
        <input type="text" name='lName' className='mg-left'/>
      </div>

      <div className="form-reg-group">
        <label htmlFor="streetName">Street Name*</label>
        <input className="input-full-width" type="text" name='streepostalCode' />
      </div>

      <div className="form-reg-group reg-row">
        <label htmlFor="postalCode">Postal Code*</label>
        <input type="text" name='postalCode'/>
      </div>

      <div className="form-reg-group reg-row">
        <label className='mg-left' htmlFor="city">City*</label>
        <input type="text" name='city' className='mg-left'/>
      </div>

      <div className="form-reg-group reg-row">
        <label htmlFor="mobile">Mobile*</label>
        <input type="text" name='mobile'/>
      </div>

      <div className="form-reg-group reg-row">
        <label className='mg-left' htmlFor="company">Company*</label>
        <input type="text" name='company' className='mg-left'/>
      </div>

      <div className="form-reg-group">
        <label htmlFor="email">E-mail*</label>
        <input type="text" name='email' className="input-full-width"/>
      </div>

      <div className="form-reg-group">
        <label htmlFor="password">Password*</label>
        <input type="password" name='password' className="input-full-width"/>
      </div>

      <div className="form-reg-group">
        <label htmlFor="cPassword">Confirm Password*</label>
        <input type="text" name='cPassword' className="input-full-width"/>
      </div>

      <div className="form-reg-group">
        <label htmlFor="profileImg">Upload Profile Image (Optional)*</label>
        <input type="text" name='profileImg' className="input-full-width"/>
      </div>
      
      <div className="terms">
      <input type="checkbox" id='check'/>
      <label className='terms-label' htmlFor="checkbox">I have read and accepts the terms and agreements</label>
      </div>
      <button className='submit'>Submit</button>
      
      </form>
      



    </div>


    </div>
  )
}

export default Registration