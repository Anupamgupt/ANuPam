import React,{useEffect, useState} from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import './contact.css'
import Intro from '../../components/intro/Intro';
import { useDispatch } from 'react-redux';
import { page } from '../../store/NavSlice';

function Contact() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(page("Contact"));
  }, [dispatch]); 
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  return (
     <div className="contact">
      <Intro/>
        <div className="contact-cont">
          <h1 className="port port2">CONTACT ME</h1>
          <div className="sub-contact">
            <div className="contact_left">
              <div className="lineone_contact"></div>
              <h1 className="contactcat">Let's Connect</h1>
              <p className="para_contact">
              Thank you for visiting my portfolio! I would love to hear from you and discuss any inquiries, collaborations, or opportunities that you may have. Please feel free to reach out to me using the contact information provided below.
              </p>
              <div class="contact_icons">
                <AiOutlineMail/>
                <AiFillLinkedin/>
                <AiFillGithub/>
                <AiOutlineTwitter/>
              </div>
            </div>
            <div className="skill_right">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='From'/>
              <input type='text' placeholder='Subject' />
              <textarea placeholder='Write something' className='text_area'/>
              <button type='submit' className='send'>Send Message</button>
            </form>     
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact