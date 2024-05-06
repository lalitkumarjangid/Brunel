import React from "react";
import image from "../assets/Homme.png";


const HomeMid = () => {
  return (
    <div className="flex flex-col items-center min-h-screen mt-10">
      <h1 className="font-coveredByYourGrace text-green-500">
        Success Stories
      </h1>
      <div className="font-semibold">
        <p className="mt-2 text-3xl">Every success journey</p>
        <p className="text-3xl">we’ve encountered</p>
      </div>
      <div className="flex justify-between items-center mt-10">
        <img src={image} alt="Image" className="h-screen w-screen" />
        <div>
          <p className="text-3xl ">Enhance fortune 50 company’s insights</p>
          <p className="text-3xl  mb-10">teams research capabilities</p>

          <button className="bg-black text-white p-4 rounded-full mt-10  hover:bg-gray-500">
            Explore More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeMid;
