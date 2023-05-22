import React from 'react'
import '../scssPages/contact.scss'
// import GoogleMaps from '../components/GoogleMaps/GoogleMaps'

const Contact = () => {
  
  return (
    <div className='contact-page'>
      <div className='hero-banner'>
        <h1 className='h1-banner'>CONTACT</h1>
        <h3 className='h3-banner'>HOME . CONTACT</h3>
      </div>
      
      <div className='contact-form'>
        <form method="POST">
          <div className='form-group'>
            <p className='p-header'>Write Something</p>
            <label htmlFor="firstName">*Your Name</label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div className='form-group'>
            <label className='labelClass' htmlFor="email">*Your Email</label>
            <input type="emaail" name="email" id="email" />
          </div>
          <div className='form-group'>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name="phoneNumber" id="phoneNumber" />
          </div>
          <div className='form-group'>
            <label className='labelClass' htmlFor="company">Company (optional)</label>
            <input type="text" name="company" id="company" />
          </div>
          <div className='large-textbox'>
            <label htmlFor="l-textbox">*Write something</label>
            <input type="text" name="l-textbox" id="l-textbox"/>
            <input type="checkbox" name="check" id="check" />
            <label className='labelCheck' htmlFor="checkbox">Save my name, email and website in this browser for the next time I comment.</label>
            <button className='contact-btn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact