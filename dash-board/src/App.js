import React from 'react'
import Sidebar from './component/Sidebar'
import Navbar from './component/navbar'
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './component/User'
import Order from './component/Order'

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex'>
        <div className='w-auto'>
          <Sidebar />
        </div>
        <div className='col'>
          <Routes>
           <Route path='/' element={<><Navbar/><Home /></>}></Route>
            <Route path='/users' element={<><Navbar/><User /></>}></Route>
            <Route path='/orders' element={<><Navbar/><Order /></>}></Route>
          </Routes>
          <Navbar />
          <Home />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App