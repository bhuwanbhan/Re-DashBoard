import React, { useState,useRef } from 'react';
import otp from '../Auth/otp.jpg';

function OTP() {

  



  return (
    <div className="flex items-center justify-center min-h-screen  p-4  ">
      <div className="relative flex flex-col md:flex-row bg-white  rounded-2xl w-full max-w-4xl overflow-hidden h-130">
        
       
        <div className="flex flex-col items-center justify-center p-6 md:p-12 w-full md:w-1/2">
          <h2 className="mb-3 text-3xl md:text-4xl font-bold text-white">Login</h2>
          <p className="text-black  font-bold  text-2xl text-center mb-4">VERIFICATION CODE</p>
          <p className="text-center mb-6 text-sm md:text-base text-black">
            Your super admin verification code is on its way! <br /> Check your email and get started.
          </p>
          
         
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            {[...Array(6)].map((_, index) => (
              <input
              key={index}
              type="text"
              maxLength="1"
       
                
                className="w-10 h-10 md:w-14 md:h-14 text-center text-xl md:text-2xl font-extrabold text-slate-90  border-blue-400  appearance-none rounded-md p-2 md:p-4 outline-blue-700 focus:bg-white border-2  "
              
              />
            ))}
          </div>

          <p className="text-sm text-center mb-4 text-black">
            Didn’t receive the OTP? <span className="text-blue-500 cursor-pointer hover:underline">Resend</span>
          </p>
          
          <button className="  rounded-xl  w-full md:w-auto px-40 py-2 md:py-3 font-medium text-white bg-blue-600 transition duration-300">
            Login
          </button>
        </div>
        
     
        <div className="hidden md:block w-1/2">
          <img src={otp} alt="Verification" className="w-full h-130 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default OTP;
