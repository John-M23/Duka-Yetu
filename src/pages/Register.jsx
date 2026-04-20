import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    return (
        <div className='login-container'>
            <form className='login-form'>
            <h2>Register</h2>
            <input
            type='text'
            name='name'
            placeholder='Name'
            />
            <input
            type='email'
            name='email'
            placeholder='Email'
            />
            <input
            type='password'
            name='password'
            placeholder='Password'
            />
            <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            />
            <input
            type='text'
            name='businessName'
            placeholder='Business Name'
            />
            <input
            type='text'
            name='businessType'
            placeholder='Business Type'
            />
            <button type='submit'>Register</button>
            </form>
        </div>
    );








}