import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'

const Login = () => {

  const [signState,setSignState] = useState('Sign In')
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')

  const user_auth = async(event)=>{
    event.preventDefault()
    if(signState === 'Sign In'){
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
  }



  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
        {signState === 'Sign Up' ?  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' /> : <></> }
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' />
        <button onClick={user_auth} type='submit' >{signState}</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need help?</p>
        </div>
        </form>
        <div className="form-switch">
          {signState ==='Sign In' ? <p>New to Netflix?<span onClick={()=>setSignState('Sign Up')}  >Sign Up Now</span></p> : <p>Already have account?<span onClick={()=>setSignState('Sign In')}>Sign In Now</span></p> }
          
        </div>
      </div>
    </div>
  )
}

export default Login
