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
        type="location"
        name="business location "
        placeholder="Business-Location"
           />

        


           <select>
            <option value="">Select Business Type </option>
            
            <option value="Hardware">Hardware</option>
            <option value="">Kiosk</option>
            <option value="">liquor Store/Wines&Spirit</option>
            <option value="">Shop</option>
            <option value="">Supermarket</option>
            <option value="">Whole-sale Shop</option>
            <option value="">Others</option>
           </select>
        
            <button type='submit'>Register</button>
            </form>
        </div>
    );








}