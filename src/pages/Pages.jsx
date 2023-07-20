import React from 'react'
import Login from './Login'
import Register from './Register'
import App from '../App'
import {Route, Routes} from 'react-router-dom'
function Pages() {
  return (
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default Pages