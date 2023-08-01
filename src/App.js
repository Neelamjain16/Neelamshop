import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
             <Routes>
                <Route exact path="/" element={<Login/>} /> 
                <Route exact path="/Register" element={<Register/>} /> 
                <Route exact path="/Navbar" element={<Navbar/>} /> 
                <Route exact path="/Home" element={<Home/>} /> 
                
             </Routes>  
         </BrowserRouter>
    </div>
  );
}

export default App;
