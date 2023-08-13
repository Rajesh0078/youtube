import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Library from '../pages/Library'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/library' element={<Library />} />
            <Route path='*' element={<center>404 - page not found</center>} />
        </Routes>
    )
}

export default AllRoutes