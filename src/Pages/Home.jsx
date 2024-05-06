import React from 'react';

import Navbar from '../components/Navbar';
import HomeMid from '../components/HomeMid';
import AskQuestion from '../components/AskQuestion';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <HomeMid />
      <AskQuestion />
      <Footer/>
    </div>
   
  );
}

export default Home;