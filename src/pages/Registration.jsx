import React, { useState } from 'react'
import '../scssPages/registration.scss'

const Registration = () => {

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
    <div className='registration-page'>
      <div className="reg-form">
        <form action="">
          <p className='registerText'>Please Register Your new Account</p>

          <div className="form-reg-group">
            <label htmlFor="email">E-mail*</label>
            <input type="text" name='email' className="input-full-width" value={formData.email} onChange={handleChange}/>
          </div>

          <div className="form-reg-group">
            <label htmlFor="password">Password*</label>
            <input type="password" name='password' className="input-full-width" value={formData.password} onChange={handleChange}/>
          </div>

          <div className="form-reg-group">
            <label htmlFor="cPassword">Confirm Password*</label>
            <input type="text" name='cPassword' className="input-full-width" value={formData.cPassword} onChange={handleChange}/>
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