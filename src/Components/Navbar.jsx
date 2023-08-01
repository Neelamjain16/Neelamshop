import React from 'react'
import {  Link } from "react-router-dom";

function Navbar() {
  return (
    <div>


<div className='Navbar'>
<li>  <Link to="/">Login</Link> </li>
<li>  <Link to="/Register">Register</Link> </li>
    </div>



    </div>
  )
}

export default Navbar