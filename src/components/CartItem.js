


import React, { useContext } from 'react'

import { CiCircleRemove } from "react-icons/ci";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { CartContext } from '../contexts/CartContext';




const CartItem = ({item}) => {


  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);
  // destructure item 
  const {id, title, image, price, amount} = item;


  return (

    <div className='flex min-h-[140px] p-4' style={{borderBottom:'1px solid black'}}>
     <div className='min-w-[100px] min-h-[120px] flex items-center gap-x-2 '>

   {/* image  */}

     <div >
      <img className='max-w-[70px]' src={image} alt=''/>
     </div>
     </div>


 {/* title of image  */}
  <div className='w-full flex flex-col '>
      <div className='flex justify-between  min-h-[70px]'>
        {/* title  */}
        <div className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
          {title}
      </div>

     {/* X- icon remove product */}
   <div onClick={()=>{removeFromCart(id)}} className='text-xl cursor-pointer'>
          
        
          <CiCircleRemove  className='text-gray-700 hover:text-red-500 translate text-3xl '/> 
          </div>
    </div>
    

  <div className='flex gap-x-2 h-[35px] text-sm min-h-[70px]'>


{/* qty  */}
{/*  -  &  +  */}
<div className='flex flex-1 max-w-[100px] items-center h-full text-primary font-medium'>

  {/* minus icon*/}
<div onClick={()=> decreaseAmount(id)} className='flex-1 h-7 w-7 flex justify-center items-center cursor-pointer border-2  '>   
    <AiOutlineMinus />
</div>

  {/*  amount + 1234 */}
  <div className=' flex justify-center px-2'>
    {amount}
  </div>


   {/* plus icon  */}
  <div onClick={()=>increaseAmount(id)} className='flex-1 h-7 w-7 flex justify-center items-center cursor-pointer border-2'>
   <AiOutlinePlus />
  </div>
  



</div>
{/* item price  */}
<div className='flex-1 flex items-center justify-around'>$ {price}</div>

{/* final price  */}
 {/* the total price making with 2 decimal  */}
<div 
className='flex-1 flex justify-end items-center text-primary font-bold '>
{`$ ${parseFloat(price * amount).toFixed(2)}`}
</div>
        </div>
       
      
       </div>
        </div>
   
  

  )
}

export default CartItem