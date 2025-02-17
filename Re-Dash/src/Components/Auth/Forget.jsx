import React from 'react'

function Forget() {
  return (
    <div className=' '>
 <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 class="text-2xl font-medium">Forgot your password?</h1>
        <p class="text-slate-500">Enter your email below and we will send you a reset link</p>

        <form  class="my-10">
            <div class="flex flex-col space-y-5">
               
                 
                    {/* <input id="email" name="email" type="email" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address"/>  */}
                    <div class="max-w-sm">
  <label class="block text-2xl mb-2 dark:text-white font-bold">Email</label>
  <div class="relative">
    <input id="hs-toggle-password" type="password" 
           class=" border-2  py-3 ps-4 pe-10 block    w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" 
           placeholder="Email" />

    <button type="button" 
            class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
            data-hs-toggle-password='{
              "target": "#hs-toggle-password"
            }'>
      <svg class="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path class="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
        <path class="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
        <path class="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
        <line class="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
        <path class="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
        <circle class="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
      </svg>
    </button>
  </div>
</div>
     

             
             
                <button class="  py-3 font-medium text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg border-indigo-500 hover:shadow inline-flex  items-center justify-center"> 
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                      </svg> */}
                      
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