import React from "react";
import Navbar from "./Navbar";
function Register() {
    return (
<>
<Navbar/>
        <form>

            <label>
                Name: <input type="text"></input>
                LastName:<input type="text"></input>
                <br></br>
                UserName:<input type="text"></input>
                Email:<input type="email"></input>
                PhoneNo:<input type="tel"></input>
                Password:<input type="Password"></input>
            
            </label>
   
<button>Register</button>

        </form>
</>
    );
}

export default Register;


