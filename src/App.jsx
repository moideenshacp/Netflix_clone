import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes,Route, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log('login successful');
        navigate('/')
      }else{
        console.log('nott logged in');
        navigate('/login')

        
      }
    })
  },[])


  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/login' element={<Login/> }/>
        <Route path='/player/:id' element= {<Player/>} />
      </Routes>
          
    </div>
  )
}

export default App
