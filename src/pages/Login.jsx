import {useState} from "react"; //lets my component remember data like (Email/password)
import {useNavigate} from "react-router-dom"; // help me to navigate to different pages like dahboard
import axios from "axios"; //helps me to send request to my backend 


// login page component
export default function Login() { //- This creates login component(page)
const navigate = useNavigate();  

const [formData, setFormData] = useState({
  email:"",
  password:"",
});

//form Data stores input
//set FormData - Updates it



const [error, setError] = useState(""); // Stores error 

// Handle form input changes
const handleChange = (e) => {  // e this is the event 

  setFormData({
    ...formData,
    [e.target.name]: e.target.value, // e.taget.name 
  });
};

// Handle form submission
const handleSubmit = async (e)=> {
e.preventDefault();
if (!formData.email || !formData.password) {
  setError("Please fill in all fields");
  return;

}
try {
  const res =await axios.post("http://localhost:5000/api/auth/login", formData);
console.log(res.data); // Sends emal and password to backend and get response from backend


localStorage.setItem("token",res.data.token); // Saves login token in browser 

// Redirect to dashboard or home page after successful login
navigate("/dashboard");
} catch (err) {
  setError("Login failed. Please try again.");

}

  };
 return (
<div className='login-container'>
 
<form className="login-form" onSubmit={handleSubmit}>
   <h2>Login</h2>
  <input 
  type='email'
  name='email'
  placeholder='Email'
  value ={formData.email}
  onChange={handleChange}
  required
/>
<input 
  type='password'
  name='password'
  placeholder='Enter Password'
  value={formData.password}
  onChange={handleChange}
  required  
/>



<button type="Submit">Login</button>


 {error && <p style={{color:'red'}}>{error}</p>}

<p>
  Dont have an account? <a href='/register'>Sign Up</a>
</p>
</form>
</div>
 );
}