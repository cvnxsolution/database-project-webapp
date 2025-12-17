import React from 'react'
import google from '../assets/googlelogo.png'
import telegram from '../assets/telegramlogo.png'
import ucs from '../assets/ucslogo.jpg'
import '../css/Signup.css'

const Login = () => {
  return (
    <div className='signup-wrapper'>
        <div className='signup-card'>
            <h2 className='signup-title'>
                Log in to continue your learning journey
            </h2>

            <input 
                type="email" 
                placeholder='Email'
                className='signup-input'
            />

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

        <div className='login-link'>
            Don't have an account? <a href="/signup">Signup</a>
        </div>
        

        </div>
    </div>
  )
}

export default Login