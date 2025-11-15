import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
           <Route path="/resetPassword" element={<ResetPassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


