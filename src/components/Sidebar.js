
import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { CartContext } from '../contexts/CartContext'
import CartItem from './CartItem'
import {MdDeleteForever} from 'react-icons/md';
import { Link } from 'react-router-dom'



const Sidebar = () => {

  const {isOpen, handleClose} = useContext(SidebarContext)

  const {cart,clearCart, total, itemAmount} = useContext(CartContext)

  return (

    <div className={`${isOpen ? 'right-0' : '-right-full'}
    w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 lg:px-[35px] mt-20`}>
     

     <div className='flex items-center justify-between py-6 border-b'>

      <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>

       {/* icon */}


      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <AiOutlineArrowRight 
        className='text-2xl'/>
      </div>

     </div>

    

    {/* // scroll bar for cart items in div */}

     <div className='flex flex-col gap-y-2 h-[300px] lg:h-[310px] sm:h-[330px] overflow-y-auto overflow-x-hidden' >
     {cart.map((item) => {

      return <CartItem item ={item} key={item.id}/>
     })}
      </div>

   {/* Total sub price bottom */}
   <div className=''>
    
    {/*in this below div X - clear symbol came to the right hand side using with flex  */}
    <div className=' flex w-full justify-between items-center bg-red-200' style={{borderBottomRightRadius:'50px', borderTopRightRadius:'50px'}}>
      {/* Total  */}
      <div className='font-bold'> 
     <span className='ml-2'>TOTAL : </span> $ {parseFloat(total).toFixed(2)}
      </div>



      {/* clearcart icon or DELETE  */}
  
      <div onClick={clearCart} className=' cursor-pointer py-4 bg-red-500 w-20 h-12 flex justify-center items-center text-xl ' style={{borderRadius:'10px',}}>
          <MdDeleteForever /> Clear 
      </div>
    </div>

    {/* Order Now  */}

    <div className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium h-[20px] cursor-pointer'>
      Order Now
    </div>
  
   </div>
    </div>
  )
}

export default Sidebar