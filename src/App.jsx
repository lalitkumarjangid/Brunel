import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Signup from './Pages/signup';
import Submit from './Pages/Submit';
import * as errorpage from './Pages/errorpage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="*" element={<errorpage.default />} />

        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
