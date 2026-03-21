// import {useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

export default function Login() {
 return (
<div className='login'>
  <h2>Login</h2>
<form>
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

</form>
  
<p style ={{color:'red'}}>
  Fill in all the fields to login
</p>

<p>
  Dont have an account? <a href='/register'>Sign Up</a>
</p>

</div>
 );}