import React, { useContext, useEffect, useState } from 'react'
// sidebarcontext
import { SidebarContext } from '../contexts/SidebarContext'
// cartcontext
import { CartContext } from '../contexts/CartContext'
import {BsFillBagFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'





const Header = () => {

// header state 
const [isActive, setIsActive] = useState(false)

const {isOpen,setIsOpen} = useContext(SidebarContext)
const {itemAmount} = useContext(CartContext)

 const ShoppingLogo = 'https://cdn.iconscout.com/icon/free/png-512/free-shopping-bags-1434010-1212090.png?f=webp&w=512'


 // event listener scroll
 useEffect(()=>{

  window.addEventListener('scroll', ()=>{

    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  })
 })

  return (

    <header 
    className= {`${ 
      isActive ? 'bg-blue-200 shadow-md' : 'bg-black'}
       h-[80px] flex justify-between 
     fixed w-full z-10 transition`}>


   {/*--- logo content FashionStore ---*/}
  <div className='ml-16 mt-4 w-[56%] flex'>

        {/* logo image  */}
  

<Link to={'/'}>
  <div className='w-[45px] h-[40px] '>
  <img src={ShoppingLogo} alt='' />
</div>
</Link>

<Link to={'/'}>
    <div className=' mt-1 ml-2'>
      <span className='text-2xl font-bold text-gray-600'>
          Fashion
        </span>
      <span className='text-3xl font-bold text-green-600'>
          Store
      </span>
    </div>
 </Link>
  </div>  

   {/* --- Cart Bag logo &  0  cart --- */}


<div className='w-[30%]'>

<div onClick={()=> setIsOpen(!isOpen)}
  className='cursor-pointer mx-auto flex justify-end relative max-w-[40px] mt-7  mr-18 ' style={{color:'orange'}}>
    
    <BsFillBagFill className='text-2xl'/>
    <div className='bg-red-600 absolute -right-2 -bottom-2 text-[12px] w-[20px] h-[18px] text-white rounded-full flex justify-center items-center'>
      {itemAmount}
      </div>
  </div>
</div>

    </header>
  )
}

export default Header