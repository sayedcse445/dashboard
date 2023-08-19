import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.json'
import '../component/style.css'

export default function Sidebar() {
  const [active,setActive] = useState(1)
  return (
    <div className='sidebar d-flex justify-content-between flex-column bg-dark text-white  text-d-none py-3 ps-3 pe-5  vh-100'>
      <div>  
        <a href='' className='p-3 text-decoretion-none text-white'>
          < i className='bi bi-code-slash fs-4 me-4 text-white'></i>
          <span className='fs-3 text-white'>Sidebar</span>
        </a>
        <hr className='text-white mt-3' />
        <ul className='nav nav-pills flex-column'>
          <li className={active ===1 ?'active nav-item p-2': 'nav-item p-2'} onClick={e =>setActive(1)}>
            <span className="p-1">
              <i className='bi bi-speedometer2 me-2 text-white'></i>
              <span className='text-white '>Dashboard</span>
            </span>
            </li>
            <li className={active ===2 ?'active nav-item p-2': 'nav-item p-2'} onClick={e =>setActive(2)}>
            <span className="p-3">
              <i className='bi bi-people me-2 text-white'></i>
              <span className='text-white '>User</span>
            </span>
          </li>
          <li className={active ===3 ?'active nav-item p-2': 'nav-item p-2'} onClick={e =>setActive(3)}>
            <span className="p-3">
              <i className='bi bi-table me-2 text-white'></i>
              <span className='text-white '>Order</span>
            </span>
          </li>
          <li className={active ===4 ?'active nav-item p-2': 'nav-item p-2'} onClick={e =>setActive(4)}>
            <span className="p-3">
              <i className='bi bi-ui-radios-grid me-2 text-white'></i>
              <span className='text-white '>Report</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="">
        <li className='nav-item p-2'>
          <a href='' className='p-1  text-decoretion-none text-white'>
          <i className='bi bi-person-circle me-3 fs-4'></i>
          <span className='fs-4 '>Sayed</span>
          </a>
        </li>
      </div>
    </div>
  )
}
