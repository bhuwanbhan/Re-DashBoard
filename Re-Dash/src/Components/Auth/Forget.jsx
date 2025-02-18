import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Forget() {
  const navigate = useNavigate();
  return (
    <div className=' bg-gray-700 h-screen py-5 '>
 <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 class="text-2xl font-medium">Forgot your password?</h1>
        <p class="text-slate-500">Enter your email below and we will send you a reset link</p>

        <form  class="my-10">
            <div class="flex flex-col space-y-5">
               
                 
                    <div class="max-w-sm">
  <label class="block text-2xl mb-2 dark:text-white font-bold">Email</label>
  <div class="relative">
    <input type="text" 
           class=" border-2  py-3 ps-4 pe-10 block    w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" 
           placeholder="Email" />
</div>
</div>
<button className  ="py-3 font-medium text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg border-indigo-500 hover:shadow inline-flex  items-center justify-center" onClick={() => navigate("/OTP")}> 
        <span>Send</span>
                      
                </button> 
                
              
             {/* <p className='px-35 text-blue-600'>Still having problems?</p> */}
            </div>
        </form>
    </div>
    </div>
  )
}

export default Forget