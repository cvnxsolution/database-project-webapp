import React from 'react'
import google from '../assets/googlelogo.png'
import telegram from '../assets/telegramlogo.png'
import ucs from '../assets/ucslogo.jpg'
import signup from '../assets/signup.png'
import '../css/Signup.css'

const Signup = () => {
  return (
    <div className='signup-wrapper'>
        <img className='signup-img' src={signup} alt='signup'/>

        <div className='signup-card'>
            <h2 className='signup-title'>Sign up with email</h2>

            <input 
                type="text"
                placeholder='Full name' 
                className='signup-input'
            />

            <input 
                type="email" 
                placeholder='Email'
                className='signup-input'
            />

            <label className='signup-checkbox'>
                <input type="checkbox"  />
                <span>
                    Send me special offers, personalized recommendations, and learning tips.
                </span>
            </label>

            <button className='signup-button'>Continue</button>

            <div className='divider'>
                <span>Other sign up options</span>
            </div>

            <div className='social-buttons'>
                 <div className="social-box">
                    <img src={google} alt="Google" />
                </div>

                 <div className="social-box">
                    <img src={telegram} alt="Telegram" />
                </div>

                <div className="social-box">
                    <img src={ucs} alt="UCS" />
                </div>
            </div>

            <p className='terms'>
                By signing up, you agree to our <a href="#">Terms of Use</a> and{" "}
                <a href="#">Privacy Policy</a>
            </p>

            <div className='login-link'>
                Already have an account? <a href="/login">Log in</a>
            </div>
        </div>
    
    </div>
  )
}

export default Signup