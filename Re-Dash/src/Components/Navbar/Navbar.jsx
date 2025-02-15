import { faBars, faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pro from '../Navbar/pro.jpg'  


function Navbar() {

  const[open, setOpen] = useState(false)
  const Menus = ["profile","help centre", "post activity", "setting","logout", "your apps"];
  return (
    


  <nav class=" border-y-1 bg-gray-200   w-full top-0 sticky   ">
  <div class=" flex items-center justify-between  h-15 ">
    <a class=" items-center space-x-3 ms-8  text-3xl font-bold  text-gray-600">phoenix</a>

        <input type="text" placeholder='   Search'  className='border-1 h-8 rounded-2xl w-95 hidden sm:block ' />
    

      <ul class="font-medium flex sm:h-8 md:p-1 m-0 md:p-0;rounded-lg   ">

     <li>
          <a class="block py-2 px-3 "> <FontAwesomeIcon icon={faBell} className='text-gray-500' />  </a>

         
          </li>
        
        <li>
          <a class="block py-2 px-3  "> <FontAwesomeIcon icon={faBars} className='text-gray-500' />  </a></li>
        <li>
          <a class="block py-2 px-3 rounded-sm "> <img
          
           onClick={()=> setOpen(!open)} src= {pro} className='h-7  sm:p-1 rounded-4xl sm:w-auto' />

        {open  && (
          <div className='bg-white p-4 w-40  shadow-lg absolute  right-1  top-15 '>

            <ul>
              {
                  Menus.map((menu)=>(
                    <li className='p-2 text-lg cursor-pointer rounded hover:bg-gray-500' key={menu}>{menu}</li>
                  ))}
            </ul>

          </div>
               )}
          
           </a>
          </li>
      </ul>
    </div>
           
   

   </nav>

  )
}
export default Navbar;