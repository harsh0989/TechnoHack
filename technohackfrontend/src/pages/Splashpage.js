import React, { useEffect } from 'react'
import logo from '../images/logo.png'
import Login from './Login'
import { useNavigate, Redirct, Link } from 'react-router-dom'
import { Navigate } from 'react-router'

const Splashpage = () => {
  let navigate = useNavigate()
  const bg = {
    background: `linear-gradient(149.06deg, #E02768 5.36%, #C71C7A 85.52%)`,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  useEffect(() => {
    const token = localStorage.getItem(token)
    setTimeout(() => {
      console.log('hello');
      token ? navigate('/login') : navigate(`/dashboard`)
    }, 3000);

  }, [])


  return (
    <div style={bg}>
      <img src={logo} alt='img' />
    </div>
  )
}

export default Splashpage