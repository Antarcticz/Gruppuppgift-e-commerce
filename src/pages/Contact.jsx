import React from 'react'
import { Form } from 'react-router-dom'
import '../contact.scss'

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
        <input type="text" name="email" id="email" />
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

      <div className='googleMaps'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58789.24289077472!2d-43.254077324925035!3d-22.938156199616405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20Brasilien!5e0!3m2!1ssv!2sse!4v1683814264821!5m2!1ssv!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>

      </div>
      


    </div>
  )
}

export default Contact