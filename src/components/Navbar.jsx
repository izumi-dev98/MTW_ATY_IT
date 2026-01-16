import React from 'react'
import Logo from '../assets/aty.png'

const Navbar = () => {
  return (
   <>
   
   
   <nav className='px-6 py-2 flex justify-between items-center h-16 w-full bg-white shadow-2xl rounded-b-xl'>
    <img src={Logo} alt="" className='h-12 w-12 object-cover border rounded-full'/>

    <h3 className='font-bold italic text-main lg:text-2xl text-sm'>Myat Taw Win (AYE THAR YAR) Hospital</h3>
   </nav>
   
   
   </>
  )
}

export default Navbar