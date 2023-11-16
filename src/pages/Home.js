

import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import ProductPage from '../components/ProductPage'
import Hero from '../components/Hero'




const Home = () => {

// getting products from productcontext.jsx
const {products} = useContext(ProductContext)
// getting only men's and women's clothing category 
const filteredProducts = products.filter(item=>{
    return(
        item.category === "men's clothing" || item.category === "women's clothing"
    ) 
});
console.log(filteredProducts)

  return (

    <>
     
<Hero/>

    <div className='text-3xl ml-8 font-semibold'> Explore Now !</div>

           <span className='ml-40 text-xl font-semibold'>Top Rated</span>

    <div className='flex justify-center'>
    <section className='py-16'>

           
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>

         {filteredProducts.map((product) =>{

    return(

           <ProductPage product={product} key={product.id}/>
            ) 
         })}
            </div>
        </div>
    </section>
    </div>

    </>
  )
}

export default Home