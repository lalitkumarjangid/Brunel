import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Submit = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);
  return (
    <div>

   
    <nav className="flex justify-between items-center p-4 bg-gray-200">
      <div>
      <img src={logo} alt="Logo" className="h-12" />
       </div>
    </nav>
    <div className="flex flex-col items-center min-h-screen mt-10">
    <h1 className="font-coveredByYourGrace text-green-500 text-5xl mb-6"> ✅</h1>
          <h1 className="font-coveredByYourGrace text-green-500 text-2xl">Success Submitted</h1>
         <div className='font-semibold'>
     <p className="mt-2 text-5xl mb-4">Congratulations</p>
          
          </div>
          <p className='  text-xl text-zinc-600 '> Your request has been successfully submitted to us. We 
</p>
<p className='  text-xl text-zinc-600 '> will validate your information and reach out to your 
</p>
<p className=' mb-10 text-xl text-zinc-600 '> shortly with updates
</p>
<p className=' mt-10 text-xl text-zinc-600 text-center'>Redirecting to home page in {countdown} seconds...</p>
          </div>
          
          </div>
  )
}

export default Submit