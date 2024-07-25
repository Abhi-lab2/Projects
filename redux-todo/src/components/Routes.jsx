import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"
import Todo from '../todo/Todo'

const AllRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Login />}>Login</Route>
                {/* <Route path='/todo' element={<Todo />}>Todo App</Route> */}
            </Routes>
        </div>
    )
}

export default AllRoutes