import React from 'react';
import errorImage from '../assets/error.jpg'; 

const ErrorPage = () => {
  return (
    <div style={{
      backgroundImage: `url(${errorImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw'
    }}>
    </div>
  );
}

export default ErrorPage;
