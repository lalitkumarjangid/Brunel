import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
        <nav className="mt-5 flex items-center justify-between p-5 rounded-full bg-slate-50 border-2 border-Slate-50">
             <img src={logo} alt="Logo" className="h-12" />
          <div>
            <button className="bg-white mr-4 p-2 rounded text-black"><Link to="/Signup">Get Projects</Link></button>
            <button className="bg-black text-white p-2 rounded-full hover:bg-gray-500">Onboard Talent</button>
          </div>
       </nav>
       
      );

}

export default Navbar