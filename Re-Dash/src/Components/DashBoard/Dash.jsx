import React from 'react'
import './Dash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faStar } from '@fortawesome/free-solid-svg-icons'

function Dash() {
  return (
    <div>
     <div className='h-screen bg-gray-100 flex '>

    <div className='lg:mx-76  h-screen '>

        
            <h2 className='text-3xl font-bold mt-6'>Ecommerce Dashboard</h2>
            <p className='text-gray-600'>Here’s what’s going on at your business right now</p>
            <div className='sm:flex gap-4 '>
            <p className='mt-7 space-x-3 '><FontAwesomeIcon icon={faStar}/> <span className='font-bold text-xl '>57 new orders</span> <br />
            <span className='text-xs  ms-7   '> Awating processing </span> </p>
            <p className='mt-7 space-x-3 '><FontAwesomeIcon icon={faPause}/> <span className='font-bold text-xl '>5 orders</span> <br />
            <span className='text-xs  ms-7   '> On hold </span> </p>
            <p className='mt-7 space-x-3 '><FontAwesomeIcon icon={faStar}/> <span className='font-bold text-xl '>15 products</span> <br />
            <span className='text-xs ms-9  '> Out of stock</span> </p>
            </div>
            </div>
                  
              
            </div>
            <div className='ms:ms-0  md:ms-80 md:h-screen lg:ms-80 bg-white' >
            <div className='grid   sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2  gap-x-4  gap-y-4  '>
                  <div className='bg-gray-200  rounded-lg shadow-xl min-h-[300px]  '>
                    <div className=' sm:mt-4 sm:ms-4 flex'>
                    <p>Total orders</p>
                    <span>-6.8%</span>
                    
                    <div className=' justify-end '>
                      <p>16,247</p>
                    </div>
                    </div>
                  </div>
                  <div className='bg-gray-200  rounded-lg shadow-xl min-h-[300px]'>
                    <div className=' sm:mt-4 sm:ms-4 '>
                    <p>New customers+26.5%</p>
                    <p>Last 7 days</p>
                    </div>
                  </div>
                  <div className='bg-gray-200  rounded-lg shadow-xl min-h-[300px] '>
                    <div className='sm:mt-4 sm:ms-4 '>
                    <p>Top coupons</p>
                    <p>Last 7 days</p>
                    </div>
                  </div>
                  <div className='bg-gray-200  rounded-lg shadow-xl min-h-[300px]'>
                    <div className='sm:mt-4 sm:ms-4 '>
                    <p>Paying vs non paying</p>
                    <p>Last 7 days</p>
                  </div>
                  </div>

                </div>
                <p className='border-y-1 text-gray-400 min-h-[300px] mt-10'>
                <p className=' ms-5  mt-10  font-bold text-2xl text-black'>Latest reviews</p>
                <p className='ms-5'>Payment received across all channels</p>
                </p>
                
                <div>
                  
                </div>
                </div>

</div>
)
}

export default Dash