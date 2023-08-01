import React from 'react'
import Navbar from './Navbar'
function Login() {
  return (
    <div>
        <Navbar/>
    <form>

<label>
  
    UserName:<input type="text"></input>
    Password:<input type="Password"></input>
   Confirm Password:<input type="Password"></input>

</label>

<button>Login</button>

</form>
    </div>

  )
}

export default Login