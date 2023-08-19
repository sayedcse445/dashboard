import React from 'react'
import Sidebar from './component/Sidebar'
import Navbar from './component/navbar'
import Home from './component/Home'
// import 'bootstrap/dist/css/bootstrap'

function App() {
  return (
    <div className='d-flex'>
      <div className='w-auto'>
        <Sidebar />
      </div>
      <div className='col'>
        <Navbar />
        <Home />
      </div>
    </div>
  )
}
export default App