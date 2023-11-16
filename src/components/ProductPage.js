import React, { useContext} from 'react'
import { AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {AiFillEye} from 'react-icons/ai';
import { CartContext } from '../contexts/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Product = ({product}) => {

 // cartContext.js file
  const {addToCart} = useContext(CartContext)

  // destructuring product 
  const {id, image, category, title, price} = product


// toastisy 

 const notify1 = ()=>{

  toast.success('Added to Cart!', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
 }

   return (

    <div>
      <div className='border border-[grey] h-[300px] mb-4 relative overflow-hidden group transition: rounded-md'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image  */}
         
         <div className='w-[200px] mx-auto-flex justify-center items-center'>
         
              <img className='max-h-[160px] group-hover:scale-110 transition duration-300' 
              src={image} alt=''
              />
     
         </div>
        </div>
               {/* buttons  */}
               <div className='absolute top-6 -right-1 group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-1 group-hover:opacity-100 transition-all '>

                <button onClick={()=>{
                  addToCart(product,id)

                }}>

              {/* shopping icon  */}
              <div onClick={notify1} className='flex justify-center items-center text-white w-12 h-12 bg-red-500 rounded-lg'>
              <AiFillShopping className='text-3xl'/>
              </div>
              
                </button>

   {/* Toasting Notification  */}

   <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>         

               {/* eye icon  */}
                <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl rounded-lg' >
                   <AiFillEye  className='w-7 h-14'/>
                </Link>
               </div>
      </div>

      {/* category, title, price  */}

      <div>
     
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <h2 className='font-semibold mb-1'>{title}</h2>
 

        <div className='font-semibold'>$ {price}</div>

      </div>
    </div>
  )
}

export default Product