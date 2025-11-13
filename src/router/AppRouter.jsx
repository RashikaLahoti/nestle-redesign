import React from 'react'
import { Route, Routes } from 'react-router'
import HomeLayout from '../layouts/HomeLayout'
import AuthLayout from '../layouts/AuthLayout'

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomeLayout/>}/>
            <Route path='/auth' element={<AuthLayout/>}/>
        </Routes>
    </div>
  )
}

export default AppRouter