import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './../Authorization/Welcome';
import Login from './../Authorization/Login';
import SignUp from '../Authorization/SignUp';
import PrivateRoute from './PrivateRoute';
import Home from '../page/Home';
import Product from './../page/Product';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
        <Route path="/product/:id" element={<PrivateRoute><Product/></PrivateRoute>}/>
     </Routes>
  )
}

export default AllRoutes