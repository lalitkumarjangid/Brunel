import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);

  const isFormValid = () => {
    return name !== '' && email !== '';
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gray-200">
        <div>
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <button className="text-black p-2 rounded-full border-2 border-black"><Link to="/">╳ </Link></button>
      </nav>
      <div className="flex flex-col items-center min-h-screen mt-10">
        <h1 className="font-coveredByYourGrace text-green-500">Registration Form</h1>
        <div className='font-semibold'>
          <p className="mt-2 text-3xl">Start your success </p>
          <p className='text-3xl '> Journey here!</p>
        </div>
        <form className=" mt-20 flex flex-col items-center space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            onBlur={handleBlur}
            className="p-2 mb-2 border rounded-full w-64"
          />
          {!isFormValid() && touched && <p className="text-red-500">Please enter your name.</p>}
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            onBlur={handleBlur}
            className="p-2 mb-2 border rounded-full w-64"
          />
          {!isFormValid() && touched && <p className="text-red-500">Please enter your email.</p>}
          <button 
            type="submit" 
            disabled={!isFormValid()} 
            className={`p-2 rounded-full w-64 ${isFormValid() ? 'bg-black text-white' : 'bg-gray-400 text-black'}`}
          >
            <Link to="/submit">Submit</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
