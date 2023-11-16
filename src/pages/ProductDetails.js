import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { ProductContext } from '../contexts/ProductContext'
// toastify 
import { ToastContainer, toast } from 'react-toastify';



const ProductDetails = () => {

  // getting product id from the URL
  const {id} = useParams()
  const {products} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)

  // getting single product based on id 
  const product = products.find((item)=>{

    return item.id === parseInt(id)
  });

  // if product is not found 
  if (!product){

    return <section className='h-screen flex justify-center'>Loading...</section>
  }
  // destructuroing product 
  const {title, price, description, image} = product;


  // Toastify Notification 

const toastify4 = ()=>{

  toast.success('Added to Cart Successfully!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
    
}




  return (
    
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
          
          {/* image and text wrapper  */}
          <div className='flex flex-col lg:flex-row items-center'>

         
      {/* image  */}
      <div className='ml-8'>
        <img className='max-w-[70px] lg:max-w-100 ' src={image} alt=''/>
      </div >
     
     
        {/* text  */}
      <div className='flex-1 text-center lg:text-left ml-12'>
        <h1 className='text-[15px] font-medium max-w-[350px] mx-auto lg:mx-0'>
              {title}
        </h1>
        <div className='text-xl text-red-500 font-medium mb-3'>
          $ {price}
        </div>
        <p className='mb-3'>{description}</p>

       <div onClick={toastify4}>
        <button onClick={()=>addToCart(product,product.id)} className='bg-primary py-1 px-4 text-white mr-7'>
            Add to cart
        </button>
        </div>
{/* // Toastify notification */}
        
<ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>


      </div>
      </div>
      </div>
    </section>
  )
}

export default ProductDetails