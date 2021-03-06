
import React, { useState, useEffect,useRef } from 'react';
import emailjs from 'emailjs-com';
import './Email.css'

export default function Email() {
  const form = useRef();

  function sendEmail (e) {
    e.preventDefault();
    // 'service_qnr0dl8', 'template_s98wtcm', e.target, 'user_AtCvQirmDgj0fe5PSyWxp'
    emailjs.sendForm('service_zgbq1bg', 'template_xu2rhdm', e.target, 'user_ac0cNQmyItElKr7m2Cav0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      // e.target.reset()
  }


  
  return (
    <div>
      <div class="container">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
      )
}