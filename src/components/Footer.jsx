import React from 'react';

function Footer() {
  return (
    <div className="bg-green-50 ml-5 mb-10 p-6 flex justify-between items-center">
      <div>
        &copy; Talup 2024. All rights reserved.
      </div>
      <div>
        <button className=" text-black p-2 rounded mr-2">Terms & Conditions</button>
        <button className=" mr-5 text-black p-2 rounded">Privacy Policy</button>
      </div>
    </div>
  )
}

export default Footer;