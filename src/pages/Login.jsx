// import {useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

export default function Login() {
 return (
<div className='login'>
 
<form className="login-form">
   <h2>Login</h2>
  <input 
  type='email'
  name='email'
  placeholder='Email'

  required
/>
<input 
  type='password'
  name='password'
  placeholder='Enter Password'
 
  required  
/>



<button type='Submit'>Login</button>


  
<p style ={{color:'red'}}>
  Fill in all the fields to login
</p>

<p>
  Dont have an account? <a href='/register'>Sign Up</a>
</p>
</form>
</div>
 );}