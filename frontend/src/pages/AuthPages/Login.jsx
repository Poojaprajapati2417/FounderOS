import React from 'react'
import {useState,useeffect,useNavigate} from 'react'
import LoginImg from "../../assets/LoginImg.png"
import { Link } from 'react-router'
const Login = () => {
  const navigate = useNavigate

  const [formdata, setFormData] = useState({
    email: '',
    password: ''
  })
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await axios.post('/user/auth/login', formdata)
      if(response.status){
        setMessage(response.data.message)
        const token=response.data.token
       localStorage.setItem('token', token)
       navigate('/dashboard')
      }
       

    } catch (err) {
      setError(response.data.message || 'Login failed. Please try again.')
      console.log(err);
    } finally {
      setLoading(false)
    }
  }
  const handlechange=(e)=>{
    setFormData({...formdata,[e.target.name]:e.target.value})
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className='w-[70%] mx-auto flex  justify-around gap-4 items-center bg-[#f8f6fb] rounded-lg p-8'>
      <div className='h-[500px] w-[40%]'><img src={LoginImg} className='border-2 border-gray-300 w-full h-full object-cover' alt="Login" /></div>
      <div className='bg-white w-[40%] p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='text-4xl font-semibold text-center '>WELCOME BACK</h1>
      <p className='text-center'>Login to your FounderOS account</p>
      <form className='flex flex-col gap-4 mt-4' onSubmit={handleLogin}>
        <label htmlFor="email" className='font-medium'>Email</label>
        <input type="text" id="email" name="email" placeholder='Enter your Email' className='border-2 border-gray-300 rounded-md p-2' onChange={handlechange} />
        <label htmlFor="password" className='font-medium'>Password</label>
        <input type="password" id="password" name="password" placeholder='Enter your Password' className='border-2 border-gray-300 rounded-md p-2' onChange={handlechange} />
        <div className='flex justify-between itmes-center'>
         <div>
           <input type="checkbox" id="remember" className='mr-2' />
          <label htmlFor="remember" className='font-medium'>Remember Me</label>
         </div>
          <Link to="/forgot-password" className='text-[#382ddb] hover:underline'> Forgot Password? </Link>
        </div>
        <button className='bg-[#382ddb] text-white font-medium py-2 rounded-md'>Login</button>
        <div>Don't have an account? <Link to="/register" className='text-[#382ddb] hover:underline'>Sign up</Link></div>
      </form>
      </div>
    </div>
     </div>
  )
}

export default Login