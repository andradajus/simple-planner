import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Home
