import React from 'react'
import { Navbar } from 'react-bootstrap'

function User() {
  return (
    <>
    <Navbar/>
    <div className='p-5'>
      <div className="p-2">
        <table class='table caption-top bg-info'>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </div>
    </div>
    </>
  )
}
export default User

