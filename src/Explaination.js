// step1: all folders and files created

// step2:  App.jsx


// import { BrowserRouter, Route , Routes} from "react-router-dom";

// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";


// function App() {
//   return (
    
//     <BrowserRouter>
//     <Header/>
//     <Routes>

//       <Route path="/" element={<Home/>}/>
//       <Route path="/product/:id" element={<ProductDetails/>}/>


//     </Routes>
//     <Sidebar/>
//     <Footer/>
//     </BrowserRouter>
//   );
// }

// export default App;



// step3: productcontext.jsx


// import React, { createContext, useEffect, useState } from 'react'

// export const ProductContext = createContext()



// const ProductProvider = ({children}) => {

//   const [products, setProducts] = useState([]);

//   useEffect(()=>{
//     const fetchProducts = async ()=>{

//       const response = await fetch('https://fakestoreapi.com/products')
//       const data = await response.json()
//      setProducts(data)
//     }
//   fetchProducts()
//   },[])

//   return (
    
//     <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
//   )
// }
// export default ProductProvider


// step4: index.js 


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import ProductProvider from './contexts/ProductContext';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <ProductProvider>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </ProductProvider>
// );

// step4: npm start check at console 20 products will display




// ------- mens and womens filtering ------



// step5: home.jsx  - mens and womens product will be filtered



// import React, { useContext } from 'react'
// import { ProductContext } from '../contexts/ProductContext'

// const Home = () => {

// // getting products from productcontext.jsx

// const {products} = useContext(ProductContext)
// console.log(products)

// // getting only men's and women's clothing category 
// const filteredProducts = products.filter(item=>{
//     return item.category === "men's clothing" || item.category === "women's clothing"
// })
// console.log(filteredProducts)


//   return (
//     <div>

//     </div>
//   )
// }

// export default Home



// step6: npm start check console `10 products will display 



// step7: displaying at browser



// import React, { useContext } from 'react'
// import { ProductContext } from '../contexts/ProductContext'

// const Home = () => {

// // getting products from productcontext.jsx

// const {products} = useContext(ProductContext)
// console.log(products)

// // getting only men's and women's clothing category 
// const filteredProducts = products.filter(item=>{
//     return item.category === "men's clothing" || item.category === "women's clothing"
// })
// console.log(filteredProducts)


//   return (
//     <div>
//     <section>
//         <div className='container mx-auto'>
//             <div>
//          {filteredProducts.map((product) =>{

//             return <div>{product.title}</div>
//          })}
//             </div>
//         </div>
//     </section>
//     </div>
//   )
// }

// export default Home


// step8: home.js





// import React, { useContext } from 'react'
// import { ProductContext } from '../contexts/ProductContext'


// const Home = () => {

// // getting products from productcontext.jsx

// const {products} = useContext(ProductContext)
// console.log(products)

// // getting only men's and women's clothing category 
// const filteredProducts = products.filter(item=>{
//     return(
//         item.category === "men's clothing" || item.category === "women's clothing"
//     ) 
// });

// console.log(filteredProducts)

//   return (

//     <div>
//     <section className='py-16'>
//         <div className='container mx-auto'>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
//          {filteredProducts.map((product) =>{

//     return(

//      <div className='w-full h-[300px] bg-blue-200 mb-4'key={product.id}>
//                 {product.title}
//             </div>
//             ) 

//          })}
//             </div>
//         </div>
//     </section>
//     </div>
//   )
// }

// export default Home


// step8: npm start at browaer columns will be get 



// step9: home.js 


// import React, { useContext } from 'react'
// import { ProductContext } from '../contexts/ProductContext'
// import ProductPage from '../components/ProductPage'


// const Home = () => {

// // getting products from productcontext.jsx

// const {products} = useContext(ProductContext)
// console.log(products)

// // getting only men's and women's clothing category 
// const filteredProducts = products.filter(item=>{
//     return(
//         item.category === "men's clothing" || item.category === "women's clothing"
//     ) 
// });

// console.log(filteredProducts)

//   return (

//     <div>
//     <section className='py-16'>
//         <div className='container mx-auto'>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
//          {filteredProducts.map((product) =>{

//     return(

//            <ProductPage product={product} key={product.id}/>
//             ) 

//          })}
//             </div>
//         </div>
//     </section>
//     </div>
//   )
// }

// export default Home



// step10: productpage.js


// import React from 'react'

// const Product = ({product}) => {

//   console.log(product)
//   return (
//     <div>Product</div>
//   )
// }

// export default Product


// step10: npm start browser and console




// step11: productpage.js


// import React from 'react'
// import { AiFillShopping } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import {AiFillEye} from 'react-icons/ai';

// const Product = ({product}) => {

//   console.log(product)

//   // destructuring product 
//   const {id, image, category, title, price} = product

//    return (

//     <div>
//       <div className='border border-[grey] h-[300px] mb-4 relative overflow-hidden group transition:'>
//         <div className='w-full h-full flex justify-center items-center'>
//           {/* image  */}
         
//          <div className='w-[200px] mx-auto-flex justify-center items-center'>
//          <Link to={`/product${id}`}>
//               <img className='max-h-[160px] group-hover:scale-110 transition duration-300' 
//               src={image} alt=''
//               />
//          </Link>
//          </div>
//         </div>
//                {/* buttons  */}
//                <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all'>
//                 <button>

//               {/* shopping icon  */}
//               <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500 '>
//               <AiFillShopping className='text-3xl'/>
//               </div>
//                 </button>

//                {/* eye icon  */}
//                 <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl' >
//                    <AiFillEye />
//                 </Link>
//                </div>
//       </div>

//       {/* category, title, price  */}

//       <div>
//       <Link to={`/product${id}`}>
//         <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
//         <h2 className='font-semibold mb-1'>{title}</h2>
//       </Link>

//         <div className='font-semibold'>$ {price}</div>

//       </div>
//     </div>
//   )
// }

// export default Product



// step12: sidebar context.js


// import React, { createContext, useState } from 'react'

// export const SidebarContext = createContext()

// const SidebarProvider = ({children}) => {

// const [isOpen, setIsOpen] = useState(false)

//   const handleClose = ()=>{

//     setIsOpen(false)
//   }


//   return (
//     <SidebarContext.Provider value={{isOpen,setIsOpen, handleClose}}>
//            {children}
//       </SidebarContext.Provider>
//   )
// }

// export default SidebarProvider



// step13:  index.js

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import ProductProvider from './contexts/ProductContext';
// import SidebarProvider from './contexts/SidebarContext';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(


//   <SidebarProvider>
//   <ProductProvider>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </ProductProvider>
//   </SidebarProvider>
// );


// step14:  sidebar.js


// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/SidebarContext'

// const Sidebar = () => {

//   const {isOpen, handleClose} = useContext(SidebarContext)
//   return (
//     <div>Sidebar</div>
//   )
// }

// export default Sidebar


// step15: header.js


// import React from 'react'

// const Header = () => {
//   return (
//     <div>
//       <div>header</div>
//       <div>open/close sidebar</div>
     
//     </div>
//   )
// }

// export default Header



// step16: sidebar.js



// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/SidebarContext'

// const Sidebar = () => {

//   const {isOpen, handleClose} = useContext(SidebarContext)
//   return (
//     <div className={`${isOpen ? 'right-0' : '-right-full'}
//     w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z020 px-4 lg:px-[35px]`}>Sidebar</div>
//   )
// }

// export default Sidebar



// step17: header.js


// import React, { useContext } from 'react'
// // sidebarcontext
// import { SidebarContext } from '../contexts/SidebarContext'
// import {BsFillBagFill} from 'react-icons/bs'

// const Header = () => {

//   const {isOpen,setIsOpen} = useContext(SidebarContext)

//   return (
//     <div>
//       <div>header</div>
//   <div onClick={()=> setIsOpen(!isOpen)}
//   className='cursor-pointer flex relative'>
    
//     <BsFillBagFill className='text-2xl'/>

//   </div>
     
//     </div>
//   )
// }

// export default Header



// step18: sidebar.js



// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/SidebarContext'
// import {AiOutlineArrowRight} from 'react-icons/ai'

// const Sidebar = () => {

//   const {isOpen, handleClose} = useContext(SidebarContext)
//   return (
//     <div className={`${isOpen ? 'right-0' : '-right-full'}
//     w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z020 px-4 lg:px-[35px]`}>
     

//      <div className='flex items-center justify-between py-6 border-b'>

//       <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>

//        {/* icon  */}


//       <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
//         <AiOutlineArrowRight 
//         className='text-2xl'/>
//       </div>

//      </div>
//     </div>
//   )
// }

// export default Sidebar



// step19: header.js added header tag and color pink for navbar in return() <header>  </header>


// import React, { useContext } from 'react'
// // sidebarcontext
// import { SidebarContext } from '../contexts/SidebarContext'
// import {BsFillBagFill} from 'react-icons/bs'

// const Header = () => {

//   const {isOpen,setIsOpen} = useContext(SidebarContext)


//   return (

//     <header className='bg-pink-300'>
//       <div>header</div>
//   <div onClick={()=> setIsOpen(!isOpen)}
//   className='cursor-pointer flex relative'>
    
//     <BsFillBagFill className='text-2xl'/>

//   </div>
     
//     </header>
//   )
// }

// export default Header




// step20: cartContext.js


// import React, { createContext } from 'react'

// export const CartContext = createContext()

// const CartProvider = ({children}) => {


//   return (
//     <CartContext.Provider value={'this is the cartcontext'}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }

// export default CartProvider



// step21: index.js



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import ProductProvider from './contexts/ProductContext';
// import SidebarProvider from './contexts/SidebarContext';
// import CartProvider from './contexts/CartContext';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(


//   <SidebarProvider>
//     <CartProvider>
//   <ProductProvider>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </ProductProvider>
//   </CartProvider>
//   </SidebarProvider>
// );


// step22: sidebar.js
 

// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/SidebarContext'
// import {AiOutlineArrowRight} from 'react-icons/ai'
// // importing cartContext
// import { CartContext } from '../contexts/CartContext'

// const Sidebar = () => {

//   const {isOpen, handleClose} = useContext(SidebarContext)
//   console.log(useContext(CartContext))

//   return (
//     <div className={`${isOpen ? 'right-0' : '-right-full'}
//     w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z020 px-4 lg:px-[35px]`}>
     

//      <div className='flex items-center justify-between py-6 border-b'>

//       <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>

//        {/* icon  */}


//       <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
//         <AiOutlineArrowRight 
//         className='text-2xl'/>
//       </div>

//      </div>
//     </div>
//   )
// }
// export default Sidebar



// step23: productpage.js - console.log(product) - removed 

 

// import React from 'react'
// import { AiFillShopping } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import {AiFillEye} from 'react-icons/ai';

// const Product = ({product}) => {

 

//   // destructuring product 
//   const {id, image, category, title, price} = product

//    return (

//     <div>
//       <div className='border border-[grey] h-[300px] mb-4 relative overflow-hidden group transition:'>
//         <div className='w-full h-full flex justify-center items-center'>
//           {/* image  */}
         
//          <div className='w-[200px] mx-auto-flex justify-center items-center'>
//          <Link to={`/product${id}`}>
//               <img className='max-h-[160px] group-hover:scale-110 transition duration-300' 
//               src={image} alt=''
//               />
//          </Link>
//          </div>
//         </div>
//                {/* buttons  */}
//                <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all'>
//                 <button>

//               {/* shopping icon  */}
//               <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500 '>
//               <AiFillShopping className='text-3xl'/>
//               </div>
//                 </button>

//                {/* eye icon  */}
//                 <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl' >
//                    <AiFillEye />
//                 </Link>
//                </div>
//       </div>

//       {/* category, title, price  */}

//       <div>
//       <Link to={`/product${id}`}>
//         <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
//         <h2 className='font-semibold mb-1'>{title}</h2>
//       </Link>

//         <div className='font-semibold'>$ {price}</div>

//       </div>
//     </div>
//   )
// }

// export default Product



// step24: cartContext.js - addtocart functionality 


// import React, { createContext, useState } from 'react'

// export const CartContext = createContext()

// const CartProvider = ({children}) => {

// const [cart, setCart] = useState([]);

// // add to cart
// const addToCart = ()=>{

//   console.log('added to the cart')
// }

//   return (
//     <CartContext.Provider value={{addToCart}}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }

// export default CartProvider


// step25: productpage.js


// import React, { useContext, useState } from 'react'
// import { AiFillShopping } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import {AiFillEye} from 'react-icons/ai';
// import { CartContext } from '../contexts/CartContext';

// const Product = ({product}) => {

 
//  // cartContext.js file
//   const {addToCart} = useContext(CartContext)

//   // destructuring product 
//   const {id, image, category, title, price} = product

//    return (

//     <div>
//       <div className='border border-[grey] h-[300px] mb-4 relative overflow-hidden group transition:'>
//         <div className='w-full h-full flex justify-center items-center'>
//           {/* image  */}
         
//          <div className='w-[200px] mx-auto-flex justify-center items-center'>
//          <Link to={`/product${id}`}>
//               <img className='max-h-[160px] group-hover:scale-110 transition duration-300' 
//               src={image} alt=''
//               />
//          </Link>
//          </div>
//         </div>
//                {/* buttons  */}
//                <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all'>

//                 <button onClick={()=>{
//                   addToCart()

//                 }}>

//               {/* shopping icon  */}
//               <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500 '>
//               <AiFillShopping className='text-3xl'/>
//               </div>
//                 </button>

//                {/* eye icon  */}
//                 <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl' >
//                    <AiFillEye />
//                 </Link>
//                </div>
//       </div>

//       {/* category, title, price  */}

//       <div>
//       <Link to={`/product${id}`}>
//         <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
//         <h2 className='font-semibold mb-1'>{title}</h2>
//       </Link>

//         <div className='font-semibold'>$ {price}</div>

//       </div>
//     </div>
//   )
// }
// export default Product



// step26: cartcontext.js ${id} added


// import React, { createContext, useState } from 'react'

// export const CartContext = createContext()

// const CartProvider = ({children}) => {

// const [cart, setCart] = useState([]);

// // add to cart
// const addToCart = (id)=>{

//   console.log(`item ${id}added to the cart`)
// }

//   return (
//     <CartContext.Provider value={{addToCart}}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }

// export default CartProvider


// step27: productpage.js added id  -     addToCart(id)


// import React, { useContext, useState } from 'react'
// import { AiFillShopping } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import {AiFillEye} from 'react-icons/ai';
// import { CartContext } from '../contexts/CartContext';

// const Product = ({product}) => {

 
//  // cartContext.js file
//   const {addToCart} = useContext(CartContext)

//   // destructuring product 
//   const {id, image, category, title, price} = product

//    return (

//     <div>
//       <div className='border border-[grey] h-[300px] mb-4 relative overflow-hidden group transition:'>
//         <div className='w-full h-full flex justify-center items-center'>
//           {/* image  */}
         
//          <div className='w-[200px] mx-auto-flex justify-center items-center'>
//          <Link to={`/product${id}`}>
//               <img className='max-h-[160px] group-hover:scale-110 transition duration-300' 
//               src={image} alt=''
//               />
//          </Link>
//          </div>
//         </div>
//                {/* buttons  */}
//                <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all'>

//                 <button onClick={()=>{
//                   addToCart(id)

//                 }}>

//               {/* shopping icon  */}
//               <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500 '>
//               <AiFillShopping className='text-3xl'/>
//               </div>
//                 </button>

//                {/* eye icon  */}
//                 <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl' >
//                    <AiFillEye />
//                 </Link>
//                </div>
//       </div>

//       {/* category, title, price  */}

//       <div>
//       <Link to={`/product${id}`}>
//         <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
//         <h2 className='font-semibold mb-1'>{title}</h2>
//       </Link>

//         <div className='font-semibold'>$ {price}</div>

//       </div>
//     </div>
//   )
// }

// export default Product



// step28: cartcontext.js - $(product.title) added and passed product parameter(product,id)


// import React, { createContext, useState } from 'react'


// export const CartContext = createContext()

// const CartProvider = ({children}) => {

// const [cart, setCart] = useState([]);

// // add to cart
// const addToCart = (product, id)=>{

//   console.log(`${product.title} added to the cart`)
// }

//   return (
//     <CartContext.Provider value={{addToCart}}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }

// export default CartProvider



// step29: productpage.js - added product      addToCart(product,id) 


// import React, { useContext, useState } from 'react'
// import { AiFillShopping } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import {AiFillEye} from 'react-icons/ai';
// import { CartContext } from '../contexts/CartContext';

// const Product = ({product}) => {

 
//  // cartContext.js file
//   const {addToCart} = useContext(CartContext)

//   // destructuring product 
//   const {id, image, category, title, price} = product

//    return (

//     <div>
//       <div className='border border-[grey] h-[300px] mb-4 relative overflow-hidden group transition:'>
//         <div className='w-full h-full flex justify-center items-center'>
//           {/* image  */}
         
//          <div className='w-[200px] mx-auto-flex justify-center items-center'>
//          <Link to={`/product${id}`}>
//               <img className='max-h-[160px] group-hover:scale-110 transition duration-300' 
//               src={image} alt=''
//               />
//          </Link>
//          </div>
//         </div>
//                {/* buttons  */}
//                <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all'>

//                 <button onClick={()=>{
//                   addToCart(product,id)

//                 }}>

//               {/* shopping icon  */}
//               <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500 '>
//               <AiFillShopping className='text-3xl'/>
//               </div>
//                 </button>

//                {/* eye icon  */}
//                 <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl' >
//                    <AiFillEye />
//                 </Link>
//                </div>
//       </div>

//       {/* category, title, price  */}

//       <div>
//       <Link to={`/product${id}`}>
//         <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
//         <h2 className='font-semibold mb-1'>{title}</h2>
//       </Link>

//         <div className='font-semibold'>$ {price}</div>

//       </div>
//     </div>
//   )
// }
// export default Product



// step30: cartcontext.js -  extra console added -   console.log(product)


// import React, { createContext, useState } from 'react'


// export const CartContext = createContext()

// const CartProvider = ({children}) => {

// const [cart, setCart] = useState([]);

// // add to cart
// const addToCart = (product, id)=>{
    
//   console.log(product)
//   console.log(`${product.title} added to the cart`)
// }

//   return (
//     <CartContext.Provider value={{addToCart}}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }

// export default CartProvider


// step31: cartContext.js - cart funtionaliy added 


// import React, { createContext, useState } from 'react'

// export const CartContext = createContext()

// const CartProvider = ({children}) => {

// const [cart, setCart] = useState([]);

// // add to cart
// const addToCart = (product, id)=>{
    
//   const newItem = {...product, amount: 1}

//  // check if the item is already in the cart
//  const cartItem = cart.find((item)=>{
//   return item.id === id;
//  })
// // if cart item is already in the cart
//   if(cartItem){
//     const newCart = [...cart].map(item=>{
//       if(item.id === id){

//         return {...item, amount: cartItem.amount + 1}

//       } else{

//         return item;
//       }
//     })

//     setCart(newCart)
//   } else {

//     setCart([...cart, newItem]);
//   }
// }
// console.log(cart)

//   return (
//     <CartContext.Provider value={{addToCart}}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }

// export default CartProvider



// step32: sidebar.js - removed - console.log(useContext(CartContext))

// step33: npm start check at console click one product qty multiple times increasing amount + 1 2 3 4 like that


// step34: sidebar.js - added -  const {cart} = useContext(CartContext)  and 

// <div>Cart Itmes</div>



// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/SidebarContext'
// import {AiOutlineArrowRight} from 'react-icons/ai'
// import { CartContext } from '../contexts/CartContext'

// const Sidebar = () => {

//   const {isOpen, handleClose} = useContext(SidebarContext)

//   const {cart} = useContext(CartContext)

//   return (
//     <div className={`${isOpen ? 'right-0' : '-right-full'}
//     w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z020 px-4 lg:px-[35px]`}>
     

//      <div className='flex items-center justify-between py-6 border-b'>

//       <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>

//        {/* icon */}


//       <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
//         <AiOutlineArrowRight 
//         className='text-2xl'/>
//       </div>

//      </div>

//      <div>Cart Itmes</div>
//     </div>
//   )
// }

// export default Sidebar



// step35: cartcontext.js - cart added -   <CartContext.Provider value={{cart,addToCart}}>

// step36: sidebar.js - 



// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/SidebarContext'
// import {AiOutlineArrowRight} from 'react-icons/ai'
// import { CartContext } from '../contexts/CartContext'
// import CartItem from './CartItem'


// const Sidebar = () => {

//   const {isOpen, handleClose} = useContext(SidebarContext)

//   const {cart} = useContext(CartContext)

//   return (
//     <div className={`${isOpen ? 'right-0' : '-right-full'}
//     w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z020 px-4 lg:px-[35px]`}>
     

//      <div className='flex items-center justify-between py-6 border-b'>

//       <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>

//        {/* icon */}


//       <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
//         <AiOutlineArrowRight 
//         className='text-2xl'/>
//       </div>

//      </div>

//      <div>
//      {cart.map((item) => {

//       return <CartItem item ={item} key={item.id}/>
//      })}
//       </div>

//     </div>
//   )
// }
// export default Sidebar







// step37: Cartitem.js



// import React from 'react'

// const CartItem = ({item}) => {
//   return (
//     <div>{item.title}</div>
//   )
// }
// export default CartItem


// step38: npm start check at browser add to cart product and loot at sidebar will get product names,




// step39: Cartitem.js minu , plus buttons



// import React from 'react'
// import { Link } from 'react-router-dom'
// import { CiCircleRemove } from "react-icons/ci";
// import { AiOutlineMinus } from "react-icons/ai";
// import { AiOutlinePlus } from "react-icons/ai";


// const CartItem = ({item}) => {

//   // destructure item 
//   const {id, title, image, price, amount} = item
//   return (
//     <div className='flex border-2 min-h-[140px]'>
//      <div className='min-w-[90px] min-h-[140px] flex items-center gap-x-2 border-2'>

//    {/* image  */}

//      <Link to={`/product/${id}`} >
//       <img className='max-w-[70px]' src={image} alt=''/>
//      </Link>
//      </div>


//  {/* title of image   */}
//   <div className='w-full flex flex-col mt-2 '>
//       <div className='flex justify-between border-2 min-h-[70px]'>

//         {/* title  */}
//         <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
//           {title}
//       </Link>

//           {/* icon x-symbol remove product */}
//           <div className='text-xl cursor-pointer border-2'>
          
//           <CiCircleRemove className='text-gray-700 hover:text-red-500 translate text-3xl '/> 
//           </div>
//        </div>
    


//   <div className='bg-pink-400 flex gap-x-2 h-[35px] text-sm border-2 min-h-[70px]'>

// {/* qty  */}
// <div className='flex flex-1 max-w-[100px] bg-blue-300 items-center h-full border text-primary font-medium'>

//   {/* minus icon*/}
// <div className='flex-1 h-full flex justify-center items-center cursor-pointer '>   
//     <AiOutlineMinus/>
// </div>

//   {/*  amount + 1234 */}
//   <div className=' flex justify-center px-2'>
//     {amount}
//   </div>

//    {/* plus icon  */}
//   <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
//    <AiOutlinePlus/>
//   </div>

// </div>
// {/* item price  */}
// <div className='flex-1 flex items-center justify-around'>$ {price}</div>

// {/* final price  */}
//  {/* the total price making with 2 decimal  */}
// <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
//         </div>
       
      
//        </div>
//         </div>
   
  

//   )
// }

// export default CartItem


// step40: cartContext.js


// import React, { createContext, useState } from 'react'

// export const CartContext = createContext()
// const CartProvider = ({children}) => {
// const [cart, setCart] = useState([]);

// // add to cart
// const addToCart = (product, id)=>{ 
//   const newItem = {...product, amount: 1}

//  // check if the item is already in the cart
//  const cartItem = cart.find((item)=>{
//   return item.id === id;
//  })
// // if cart item is already in the cart
//   if(cartItem){
//     const newCart = [...cart].map(item=>{
//       if(item.id === id){

//         return {...item, amount: cartItem.amount + 1}

//       } else{

//         return item;
//       }
//     })
//     setCart(newCart)
//   } else {
//     setCart([...cart, newItem]);
//   }
// }
// console.log(cart)


// // remove from cart 

// const removeFromCart = (id) => {

//   const newCart= cart.filter((item)=>{

//     return item.id !== id;
//   })
// setCart(newCart);
// }

//   return (
//     <CartContext.Provider value={{cart,addToCart,removeFromCart }}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }
// export default CartProvider



// step41: cartitem.js - importing cartContext.js  and added - const {removeFromCart} = useContext(CartContext); and adding onclick for remove X - icon



// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { CiCircleRemove } from "react-icons/ci";
// import { AiOutlineMinus } from "react-icons/ai";
// import { AiOutlinePlus } from "react-icons/ai";
// import { CartContext } from '../contexts/CartContext';


// const CartItem = ({item}) => {


//   const {removeFromCart} = useContext(CartContext);

//   // destructure item 
//   const {id, title, image, price, amount} = item
//   return (
//     <div className='flex border-2 min-h-[140px]'>
//      <div className='min-w-[90px] min-h-[140px] flex items-center gap-x-2 border-2'>

//    {/* image  */}

//      <Link to={`/product/${id}`} >
//       <img className='max-w-[70px]' src={image} alt=''/>
//      </Link>
//      </div>


//  {/* title of image   */}
//   <div className='w-full flex flex-col mt-2 '>
//       <div className='flex justify-between border-2 min-h-[70px]'>

//         {/* title  */}
//         <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
//           {title}
//       </Link>

//      {/* X- icon remove product */}
//    <div onClick={()=>{removeFromCart(id)}} className='text-xl cursor-pointer border-2'>
          
//           <CiCircleRemove className='text-gray-700 hover:text-red-500 translate text-3xl '/> 
//           </div>
//        </div>
    


//   <div className='bg-pink-400 flex gap-x-2 h-[35px] text-sm border-2 min-h-[70px]'>

// {/* qty  */}
// <div className='flex flex-1 max-w-[100px] bg-blue-300 items-center h-full border text-primary font-medium'>

//   {/* minus icon*/}
// <div className='flex-1 h-full flex justify-center items-center cursor-pointer '>   
//     <AiOutlineMinus/>
// </div>

//   {/*  amount + 1234 */}
//   <div className=' flex justify-center px-2'>
//     {amount}
//   </div>

//    {/* plus icon  */}
//   <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
//    <AiOutlinePlus/>
//   </div>

// </div>
// {/* item price  */}
// <div className='flex-1 flex items-center justify-around'>$ {price}</div>

// {/* final price  */}
//  {/* the total price making with 2 decimal  */}
// <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
//         </div>
       
      
//        </div>
//         </div>
   
  

//   )
// }
// export default CartItem



// step42: sidebar.js for bottom totsl price


// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/SidebarContext'
// import {AiOutlineArrowRight} from 'react-icons/ai'
// import { CartContext } from '../contexts/CartContext'
// import CartItem from './CartItem'
// import {MdClear} from 'react-icons/md';


// const Sidebar = () => {

//   const {isOpen, handleClose} = useContext(SidebarContext)

//   const {cart} = useContext(CartContext)

//   return (
//     <div className={`${isOpen ? 'right-0' : '-right-full'}
//     w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z020 px-4 lg:px-[35px]`}>
     

//      <div className='flex items-center justify-between py-6 border-b'>

//       <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>

//        {/* icon */}


//       <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
//         <AiOutlineArrowRight 
//         className='text-2xl'/>
//       </div>

//      </div>

//      <div>
//      {cart.map((item) => {

//       return <CartItem item ={item} key={item.id}/>
//      })}
//       </div>

//    {/* Total sub price bottom */}
//    <div>
    

//     {/*in this below div X - clear symbol came to the right hand side using with flex  */}
//     <div className='bg-pink-200 flex w-full justify-between items-center'>
//       {/* Total  */}
//       <div> 
//      <span>Total: </span> $ 1000
//       </div>
//       {/* clear cart icon  */}
//       <div className='border-2 cursor-pointer py-4 bg-red-400 text-white w-12 h-12 flex justify-center items-center text-xl'>
//      <MdClear /> 
//       </div>
//     </div>
//    </div>
//     </div>
//   )
// }

// export default Sidebar



// step43: cartcontext.js - // clear cart 

// const clearCart = ()=>{
//     setCart([])
//   }



// import React, { createContext, useState } from 'react'

// export const CartContext = createContext()
// const CartProvider = ({children}) => {
// const [cart, setCart] = useState([]);

// // add to cart
// const addToCart = (product, id)=>{ 
//   const newItem = {...product, amount: 1}

//  // check if the item is already in the cart
//  const cartItem = cart.find((item)=>{
//   return item.id === id;
//  })
// // if cart item is already in the cart
//   if(cartItem){
//     const newCart = [...cart].map(item=>{
//       if(item.id === id){

//         return {...item, amount: cartItem.amount + 1}

//       } else{

//         return item;
//       }
//     })
//     setCart(newCart)
//   } else {
//     setCart([...cart, newItem]);
//   }
// }
// console.log(cart)


// // remove from cart 

// const removeFromCart = (id) => {

//   const newCart= cart.filter((item)=>{

//     return item.id !== id;
//   })
// setCart(newCart);
// }


// // clear cart 
// const clearCart = ()=>{

//   setCart([])
// }

//   return (
//     <CartContext.Provider value={{cart,addToCart,removeFromCart, clearCart }}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }
// export default CartProvider



// step44: sidebar.js - clear carrt added -  const {cart,clearCart} = useContext(CartContext) and onClick added -

//   {/* clear cart icon  */}
//   <div onClick={clearCart} className='border-2 cursor-pointer py-4 bg-red-400 text-white w-12 h-12 flex justify-center items-center text-xl'>
//   <MdClear /> 
//    </div>


// step45: cartcontext.js - increase +  like : //// increase amount 

// const increaseAmount = ()=>{

//     console.log('amount increased')
//   }

// ex 

// import React, { createContext, useState } from 'react'

// export const CartContext = createContext()
// const CartProvider = ({children}) => {
// const [cart, setCart] = useState([]);

// // add to cart
// const addToCart = (product, id)=>{ 
//   const newItem = {...product, amount: 1}

//  // check if the item is already in the cart
//  const cartItem = cart.find((item)=>{
//   return item.id === id;
//  })
// // if cart item is already in the cart
//   if(cartItem){
//     const newCart = [...cart].map(item=>{
//       if(item.id === id){

//         return {...item, amount: cartItem.amount + 1}

//       } else{

//         return item;
//       }
//     })
//     setCart(newCart)
//   } else {
//     setCart([...cart, newItem]);
//   }
// }
// console.log(cart)


// // remove from cart 
// const removeFromCart = (id) => {

//   const newCart= cart.filter((item)=>{

//     return item.id !== id;
//   })
// setCart(newCart);
// }


// // clear cart 
// const clearCart = ()=>{

//   setCart([])
// }
// // increase amount 
// const increaseAmount = ()=>{

//   console.log('amount increased')
// }

//   return (
//     <CartContext.Provider value={{cart,addToCart,removeFromCart, clearCart, increaseAmount}}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }
// export default CartProvider



// step46: cartitem.js


// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { CiCircleRemove } from "react-icons/ci";
// import { AiOutlineMinus } from "react-icons/ai";
// import { AiOutlinePlus } from "react-icons/ai";
// import { CartContext } from '../contexts/CartContext';

// const CartItem = ({item}) => {


//   const {removeFromCart, increaseAmount} = useContext(CartContext);


//   // destructure item 
//   const {id, title, image, price, amount} = item
//   return (
//     <div className='flex border-2 min-h-[140px]'>
//      <div className='min-w-[90px] min-h-[140px] flex items-center gap-x-2 border-2'>

//    {/* image  */}

//      <Link to={`/product/${id}`} >
//       <img className='max-w-[70px]' src={image} alt=''/>
//      </Link>
//      </div>


//  {/* title of image   */}
//   <div className='w-full flex flex-col mt-2 '>
//       <div className='flex justify-between border-2 min-h-[70px]'>

//         {/* title  */}
//         <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
//           {title}
//       </Link>

//      {/* X- icon remove product */}
//    <div onClick={()=>{removeFromCart(id)}} className='text-xl cursor-pointer border-2'>
          
//           <CiCircleRemove className='text-gray-700 hover:text-red-500 translate text-3xl '/> 
//           </div>
//        </div>
    


//   <div className='bg-pink-400 flex gap-x-2 h-[35px] text-sm border-2 min-h-[70px]'>



// {/* qty  */}
// {/*  -  &  +  */}
// <div className='flex flex-1 max-w-[100px] bg-blue-300 items-center h-full border text-primary font-medium'>

//   {/* minus icon*/}
// <div className='flex-1 h-full flex justify-center items-center cursor-pointer '>   
//     <AiOutlineMinus/>
// </div>

//   {/*  amount + 1234 */}
//   <div className=' flex justify-center px-2'>
//     {amount}
//   </div>

//    {/* plus icon  */}
//   <div onClick={()=>increaseAmount()} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
//    <AiOutlinePlus/>
//   </div>

// </div>
// {/* item price  */}
// <div className='flex-1 flex items-center justify-around'>$ {price}</div>

// {/* final price  */}
//  {/* the total price making with 2 decimal  */}
// <div 
// className='flex-1 flex justify-end items-center text-primary font-bold '>
// {`$ ${parseFloat(price * amount).toFixed(2)}`}
// </div>
//         </div>
       
      
//        </div>
//         </div>
   
  

//   )
// }
// export default CartItem



// step47: cartContext.js - increase



// import React, { createContext, useState } from 'react'

// export const CartContext = createContext()
// const CartProvider = ({children}) => {
// const [cart, setCart] = useState([]);

// // add to cart
// const addToCart = (product, id)=>{ 
//   const newItem = {...product, amount: 1}

//  // check if the item is already in the cart
//  const cartItem = cart.find((item)=>{
//   return item.id === id;
//  })
// // if cart item is already in the cart
//   if(cartItem){
//     const newCart = [...cart].map(item=>{
//       if(item.id === id){

//         return {...item, amount: cartItem.amount + 1}

//       } else{

//         return item;
//       }
//     })
//     setCart(newCart)
//   } else {
//     setCart([...cart, newItem]);
//   }
// }
// console.log(cart)


// // remove from cart 
// const removeFromCart = (id) => {

//   const newCart= cart.filter((item)=>{

//     return item.id !== id;
//   })
// setCart(newCart);
// }


// // clear cart 
// const clearCart = ()=>{

//   setCart([])
// }
// // increase amount 
// const increaseAmount = (id)=>{
// const item =cart.find((item)=>item.id === id);
//   addToCart(item, id);
// }



//   return (
//     <CartContext.Provider value={{cart,addToCart,removeFromCart, clearCart, increaseAmount}}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }
// export default CartProvider



// step48: cartContext.js - decrease - 

 
// import React, { createContext, useState } from 'react'

// export const CartContext = createContext()
// const CartProvider = ({children}) => {
// const [cart, setCart] = useState([]);

// // add to cart
// const addToCart = (product, id)=>{ 
//   const newItem = {...product, amount: 1}

//  // check if the item is already in the cart
//  const cartItem = cart.find((item)=>{
//   return item.id === id;
//  })
// // if cart item is already in the cart
//   if(cartItem){
//     const newCart = [...cart].map(item=>{
//       if(item.id === id){

//         return {...item, amount: cartItem.amount + 1}

//       } else{

//         return item;
//       }
//     })
//     setCart(newCart)
//   } else {
//     setCart([...cart, newItem]);
//   }
// }
// console.log(cart)


// // remove from cart 
// const removeFromCart = (id) => {

//   const newCart= cart.filter((item)=>{

//     return item.id !== id;
//   })
// setCart(newCart);
// }


// // clear cart 
// const clearCart = ()=>{

//   setCart([]);
// }
// // increase amount 
// const increaseAmount = (id)=>{
// const item =cart.find((item)=>item.id === id);
//   addToCart(item, id);
// }

// // decrease amount
// const decreaseAmount = (id)=>{
//   const item = cart.find((item) => {
//    return item.id === id;
//   });
//   console.log(item)
// };



//   return (
//     <CartContext.Provider value={{cart,addToCart,removeFromCart, clearCart, increaseAmount, decreaseAmount}}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }
// export default CartProvider



// step49: cartitem.js - added - 

// const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);

// <div onClick={()=> decreaseAmount(id)} 



// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { CiCircleRemove } from "react-icons/ci";
// import { AiOutlineMinus } from "react-icons/ai";
// import { AiOutlinePlus } from "react-icons/ai";
// import { CartContext } from '../contexts/CartContext';

// const CartItem = ({item}) => {


//   const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);


//   // destructure item 
//   const {id, title, image, price, amount} = item
//   return (
//     <div className='flex border-2 min-h-[140px]'>
//      <div className='min-w-[90px] min-h-[140px] flex items-center gap-x-2 border-2'>

//    {/* image  */}

//      <Link to={`/product/${id}`} >
//       <img className='max-w-[70px]' src={image} alt=''/>
//      </Link>
//      </div>


//  {/* title of image   */}
//   <div className='w-full flex flex-col mt-2 '>
//       <div className='flex justify-between border-2 min-h-[70px]'>

//         {/* title  */}
//         <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
//           {title}
//       </Link>

//      {/* X- icon remove product */}
//    <div onClick={()=>{removeFromCart(id)}} className='text-xl cursor-pointer border-2'>
          
//           <CiCircleRemove className='text-gray-700 hover:text-red-500 translate text-3xl '/> 
//           </div>
//        </div>
    


//   <div className='bg-pink-400 flex gap-x-2 h-[35px] text-sm border-2 min-h-[70px]'>



// {/* qty  */}
// {/*  -  &  +  */}
// <div className='flex flex-1 max-w-[100px] bg-blue-300 items-center h-full border text-primary font-medium'>

//   {/* minus icon*/}
// <div onClick={()=> decreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer '>   
//     <AiOutlineMinus/>
// </div>

//   {/*  amount + 1234 */}
//   <div className=' flex justify-center px-2'>
//     {amount}
//   </div>

//    {/* plus icon  */}
//   <div onClick={()=>increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
//    <AiOutlinePlus/>
//   </div>

// </div>
// {/* item price  */}
// <div className='flex-1 flex items-center justify-around'>$ {price}</div>

// {/* final price  */}
//  {/* the total price making with 2 decimal  */}
// <div 
// className='flex-1 flex justify-end items-center text-primary font-bold '>
// {`$ ${parseFloat(price * amount).toFixed(2)}`}
// </div>
//         </div>
       
      
//        </div>
//         </div>
   
  

//   )
// }
// export default CartItem



// step50: cartcontext.js - DECREASED AND REMOVED BELOW 1 PRODUCT


// import React, { createContext, useState } from 'react'

// export const CartContext = createContext()
// const CartProvider = ({children}) => {
// const [cart, setCart] = useState([]);

// // add to cart
// const addToCart = (product, id)=>{ 
//   const newItem = {...product, amount: 1}

//  // check if the item is already in the cart
//  const cartItem = cart.find((item)=>{
//   return item.id === id;
//  })
// // if cart item is already in the cart
//   if(cartItem){
//     const newCart = [...cart].map(item=>{
//       if(item.id === id){

//         return {...item, amount: cartItem.amount + 1}

//       } else{

//         return item;
//       }
//     })
//     setCart(newCart)
//   } else {
//     setCart([...cart, newItem]);
//   }
// }
// console.log(cart)


// // remove from cart 
// const removeFromCart = (id) => {

//   const newCart= cart.filter((item)=>{

//     return item.id !== id;
//   })
// setCart(newCart);
// }


// // clear cart 
// const clearCart = ()=>{

//   setCart([]);
// }
// // increase amount 
// const increaseAmount = (id)=>{
// const cartItme = cart.find((item)=>item.id === id);
//   addToCart(cartItme, id);
// }

// // decrease amount
// const decreaseAmount = (id)=>{
//   const cartItem = cart.find((item) => {
//    return item.id === id;
//   });
// if(cartItem){

//  const newCart = cart.map(item =>{

//   if(item.id === id){

//     return {...item, amount: cartItem.amount - 1};
//   }else{
//     return item;
//   }
//  })

//  setCart(newCart);
// }

//   if(cartItem.amount < 2){

//     removeFromCart(id);
//   }

// };

//   return (
//     <CartContext.Provider value={{cart,addToCart,removeFromCart, clearCart, increaseAmount, decreaseAmount}}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }
// export default CartProvider



// step51: cartcontext.js

// const [itemAmount, setItemAmount] = useState(0);


// step52: header.js - added -  const {} = useContext(CartContext)


// step53: header.js


// import React, { useContext } from 'react'
// // sidebarcontext
// import { SidebarContext } from '../contexts/SidebarContext'
// // cartcontext
// import { CartContext } from '../contexts/CartContext'
// import {BsFillBagFill} from 'react-icons/bs'
// import { Link } from 'react-router-dom'


// const Header = () => {



//   const {isOpen,setIsOpen} = useContext(SidebarContext)
//  const {itemAmount} = useContext(CartContext)

//  const ShoppingLogo = 'https://cdn.iconscout.com/icon/free/png-512/free-shopping-bags-1434010-1212090.png?f=webp&w=512'

//   return (

//     <header className='bg-black h-[80px] flex justify-between'>




//    {/*--- logo content FashionStore ---*/}
//   <div className='ml-16 mt-4 w-[56%] flex'>

//         {/* logo image  */}
  

// <Link to={'/'}>
//   <div className='w-[45px] h-[40px] '>
//   <img src={ShoppingLogo} alt='' />
// </div>
// </Link>

// <Link to={'/'}>
//     <div className=' mt-1 ml-2'>
//       <span className='text-2xl font-bold text-gray-400'>
//           Fashion
//         </span>
//       <span className='text-3xl font-bold text-green-600'>
//           Store
//       </span>
//     </div>
//  </Link>
//   </div>  

//    {/* --- Cart Bag logo &  0  cart --- */}


// <div className='w-[30%]'>

// <div onClick={()=> setIsOpen(!isOpen)}
//   className='cursor-pointer mx-auto flex justify-end relative max-w-[35px] mt-7 text-white mr-18 '>
    
//     <BsFillBagFill className='text-2xl'/>
//     <div className='bg-blue-400 absolute -right-2 -bottom-2 text-[12px] w-[20px] h-[18px] text-white rounded-full flex justify-center items-center'>
//       {itemAmount}
//       </div>
//   </div>
// </div>

//     </header>
//   )
// }

// export default Header



// step54: header.js - sticky Navbar added


// import React, { useContext, useEffect, useState } from 'react'
// // sidebarcontext
// import { SidebarContext } from '../contexts/SidebarContext'
// // cartcontext
// import { CartContext } from '../contexts/CartContext'
// import {BsFillBagFill} from 'react-icons/bs'
// import { Link } from 'react-router-dom'


// const Header = () => {

// // header state 
// const [isActive, setIsActive] = useState(false)

// const {isOpen,setIsOpen} = useContext(SidebarContext)
// const {itemAmount} = useContext(CartContext)

//  const ShoppingLogo = 'https://cdn.iconscout.com/icon/free/png-512/free-shopping-bags-1434010-1212090.png?f=webp&w=512'


//  // event listener scroll
//  useEffect(()=>{

//   window.addEventListener('scroll', ()=>{

//     window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
//   })
//  })

//   return (

//     <header 
//     className= {`${ 
//       isActive ? 'bg-blue-200 shadow-md' : 'bg-black'}
//        h-[80px] flex justify-between 
//      fixed w-full z-10 transition`}>


//    {/*--- logo content FashionStore ---*/}
//   <div className='ml-16 mt-4 w-[56%] flex'>

//         {/* logo image  */}
  

// <Link to={'/'}>
//   <div className='w-[45px] h-[40px] '>
//   <img src={ShoppingLogo} alt='' />
// </div>
// </Link>

// <Link to={'/'}>
//     <div className=' mt-1 ml-2'>
//       <span className='text-2xl font-bold text-gray-600'>
//           Fashion
//         </span>
//       <span className='text-3xl font-bold text-green-600'>
//           Store
//       </span>
//     </div>
//  </Link>
//   </div>  

//    {/* --- Cart Bag logo &  0  cart --- */}


// <div className='w-[30%]'>

// <div onClick={()=> setIsOpen(!isOpen)}
//   className='cursor-pointer mx-auto flex justify-end relative max-w-[40px] mt-7  mr-18 ' style={{color:'orange'}}>
    
//     <BsFillBagFill className='text-2xl'/>
//     <div className='bg-red-600 absolute -right-2 -bottom-2 text-[12px] w-[20px] h-[18px] text-white rounded-full flex justify-center items-center'>
//       {itemAmount}
//       </div>
//   </div>
// </div>

//     </header>
//   )
// }

// export default Header



// step55: CartContext.js - updating amount


// update item amount at cart 0 Navbar
// useEffect(()=>{

//     if(cart){
  
//      const amount = cart.reduce((accumulator, currentItem)=>{
  
//       return accumulator + currentItem.amount;
//      },0)
//      setItemAmount(amount);
//     }
  
//   },[cart])

// ex 

// import React, { createContext, useEffect, useState } from 'react'


// export const CartContext = createContext()
// const CartProvider = ({children}) => {

//   // cart state
// const [cart, setCart] = useState([]);

// // item amount state 
// const [itemAmount, setItemAmount] = useState(0)

// // update item amount at cart 0 Navbar
// useEffect(()=>{

//   if(cart){

//    const amount = cart.reduce((accumulator, currentItem)=>{

//     return accumulator + currentItem.amount;
//    },0)
//    setItemAmount(amount);
//   }

// },[cart])



// // add to cart
// const addToCart = (product, id)=>{ 
//   const newItem = {...product, amount: 1}

//  // check if the item is already in the cart
//  const cartItem = cart.find((item)=>{
//   return item.id === id;
//  })
// // if cart item is already in the cart
//   if(cartItem){
//     const newCart = [...cart].map(item=>{
//       if(item.id === id){

//         return {...item, amount: cartItem.amount + 1}

//       } else{

//         return item;
//       }
//     })
//     setCart(newCart)
//   } else {
//     setCart([...cart, newItem]);
//   }
// }
// console.log(cart)


// // remove from cart 
// const removeFromCart = (id) => {

//   const newCart= cart.filter((item)=>{

//     return item.id !== id;
//   })
// setCart(newCart);
// }


// // clear cart 
// const clearCart = ()=>{

//   setCart([]);
// }
// // increase amount 
// const increaseAmount = (id)=>{
// const cartItme = cart.find((item)=>item.id === id);
//   addToCart(cartItme, id);
// }

// // decrease amount
// const decreaseAmount = (id)=>{
//   const cartItem = cart.find((item) => {
//    return item.id === id;
//   });
// if(cartItem){

//  const newCart = cart.map(item =>{

//   if(item.id === id){

//     return {...item, amount: cartItem.amount - 1};
//   }else{
//     return item;
//   }
//  })

//  setCart(newCart);
// }

//   if(cartItem.amount < 2){

//     removeFromCart(id);
//   }

// };



//   return (
//     <CartContext.Provider value={{cart,addToCart,removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount}}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }
// export default CartProvider



// step56: home page navbar below products given maring top 


// import React, { useContext } from 'react'
// import { ProductContext } from '../contexts/ProductContext'
// import ProductPage from '../components/ProductPage'

// const Home = () => {

// // getting products from productcontext.jsx
// const {products} = useContext(ProductContext)
// // getting only men's and women's clothing category 
// const filteredProducts = products.filter(item=>{
//     return(
//         item.category === "men's clothing" || item.category === "women's clothing"
//     ) 
// });
// console.log(filteredProducts)

//   return (

//     <div className='flex justify-center'>
//     <section className='py-16 mt-12'>
//         <div className='container mx-auto'>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
//          {filteredProducts.map((product) =>{

//     return(

//            <ProductPage product={product} key={product.id}/>
//             ) 
//          })}
//             </div>
//         </div>
//     </section>
//     </div>
//   )
// }
// export default Home





// ---- scroll bar added for cart items ---




// step57: sidebar.js - scrollbar added for cart items  

  {/* // scroll bar for cart items in div */}

//   <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>


// ex 

// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/SidebarContext'
// import {AiOutlineArrowRight} from 'react-icons/ai'
// import { CartContext } from '../contexts/CartContext'
// import CartItem from './CartItem'
// import {MdDeleteForever} from 'react-icons/md';

// const Sidebar = () => {

//   const {isOpen, handleClose} = useContext(SidebarContext)

//   const {cart,clearCart} = useContext(CartContext)

//   return (

//     <div className={`${isOpen ? 'right-0' : '-right-full'}
//     w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z020 px-4 lg:px-[35px] mt-20`}>
     

//      <div className='flex items-center justify-between py-6 border-b'>

//       <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>

//        {/* icon */}


//       <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
//         <AiOutlineArrowRight 
//         className='text-2xl'/>
//       </div>

//      </div>

    

//     {/* // scroll bar for cart items in div */}

//      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
//      {cart.map((item) => {

//       return <CartItem item ={item} key={item.id}/>
//      })}
//       </div>

//    {/* Total sub price bottom */}
//    <div className=''>
    
//     {/*in this below div X - clear symbol came to the right hand side using with flex  */}
//     <div className=' flex w-full justify-between items-center bg-red-200' style={{borderBottomRightRadius:'50px', borderTopRightRadius:'50px'}}>
//       {/* Total  */}
//       <div className='font-bold'> 
//      <span className='ml-2'>TOTAL : </span> $ 1000
//       </div>

//       {/* clearcart icon or DELETE  */}
      
    

//       <div onClick={clearCart} className=' cursor-pointer py-4 bg-red-500 w-20 h-12 flex justify-center items-center text-xl ' style={{borderRadius:'10px',}}>
//           <MdDeleteForever /> Clear 
//       </div>
//     </div>
//    </div>
//     </div>
//   )
// }
// export default Sidebar



// step58: cartContext.js - added 

// total price state 
// const [total, setTotal] = useState(0)


// step59: sidebar.js - total added -  
// const {cart,clearCart, total} = useContext(CartContext)

//  <div className='font-bold'> 
// <span className='ml-2'>TOTAL : </span> $ {total}
// </div> 


// step60: cartcontext.js

// useEffect(()=>{

//     const total = cart.reduce((accumulator, currentItem)=>{
  
//       return accumulator + currentItem.price * currentItem.amount
//     },0);
//     setTotal(total)
//   })


// import React, { createContext, useEffect, useState } from 'react'

// export const CartContext = createContext()
// const CartProvider = ({children}) => {

//   // cart state
// const [cart, setCart] = useState([]);

// // item amount state 
// const [itemAmount, setItemAmount] = useState(0)

// // total price state 
// const [total, setTotal] = useState(0)



// useEffect(()=>{

//   const total = cart.reduce((accumulator, currentItem)=>{

//     return accumulator + currentItem.price * currentItem.amount
//   },0);
//   setTotal(total)
// })


// // update item amount at cart 0 Navbar
// useEffect(()=>{
 
//   if(cart){

//    const amount = cart.reduce((accumulator, currentItem)=>{

//     return accumulator + currentItem.amount;
//    },0)
//    setItemAmount(amount);
//   }

// },[cart])



// // add to cart
// const addToCart = (product, id)=>{ 
//   const newItem = {...product, amount: 1}

//  // check if the item is already in the cart
//  const cartItem = cart.find((item)=>{
//   return item.id === id;
//  })
// // if cart item is already in the cart
//   if(cartItem){
//     const newCart = [...cart].map(item=>{
//       if(item.id === id){

//         return {...item, amount: cartItem.amount + 1}

//       } else{

//         return item;
//       }
//     })
//     setCart(newCart)
//   } else {
//     setCart([...cart, newItem]);
//   }
// }
// console.log(cart)


// // remove from cart 
// const removeFromCart = (id) => {

//   const newCart= cart.filter((item)=>{

//     return item.id !== id;
//   })
// setCart(newCart);
// }


// // clear cart 
// const clearCart = ()=>{

//   setCart([]);
// }
// // increase amount 
// const increaseAmount = (id)=>{
// const cartItme = cart.find((item)=>item.id === id);
//   addToCart(cartItme, id);
// }

// // decrease amount
// const decreaseAmount = (id)=>{
//   const cartItem = cart.find((item) => {
//    return item.id === id;
//   });
// if(cartItem){

//  const newCart = cart.map(item =>{
//   if(item.id === id){
//     return {...item, amount: cartItem.amount - 1};
//   }else{
//     return item;
//   }
//  })
//  setCart(newCart);
// }
//   if(cartItem.amount < 2){
//     removeFromCart(id);
//   }
// };

//   return (
//     <CartContext.Provider 
//     value={{
//       cart,
//       addToCart,
//       removeFromCart,
//        clearCart,
//         increaseAmount,
//          decreaseAmount, 
//          itemAmount,
//          total,
//          }}>
      
//         {children}
//     </CartContext.Provider>
//   )
// }
// export default CartProvider



// step61: sidebar.js - added total decimal total

{/* <div className='font-bold'> 
<span className='ml-2'>TOTAL : </span> $ {parseFloat(total).toFixed(2)}
 </div> */}



 // ------------ Hero.js ------------


 // step62: Hero.js is imported in Home.js


//  import React from 'react'
// import HeroWomenBanner from '../img/woman_hero.png' 
// import { Link } from 'react-router-dom'

// const Hero = () => {

  
// const HeroBanner = 'https://img.freepik.com/premium-photo/happy-young-women-with-shopping-bags-white-background_392895-187459.jpg'

//   return (
   
//     <section className=' h-[450px] bg-no-repeat bg-cover bg-center py-20'>
//      <div className='container mx-auto flex justify-around mt-10'>
//         {/* text  */}
//     <div className='flex'>
        
//       <div className='mt-20 text-2xl font-semibold'>
//         New Trends  
//        <br/>
//     Diwali Dhamaka
// </div>  

        
   
//     </div>
//          {/* image  */}
//          <div className='w-[300px] mt-10 '>
//           <img src={HeroBanner} alt=''/>
//          </div>
//      </div>
//     </section>
//   )
// }

// export default Hero



 // step63: home.js - added explore now option at return() funtion


//  <div className='text-3xl ml-8 font-semibold'> Explore Now !</div>

//  <span className='ml-40 text-xl font-semibold'>Top Rated</span>



 // step64: sidebar.js order now button


// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/SidebarContext'
// import {AiOutlineArrowRight} from 'react-icons/ai'
// import { CartContext } from '../contexts/CartContext'
// import CartItem from './CartItem'
// import {MdDeleteForever} from 'react-icons/md';


// const Sidebar = () => {

//   const {isOpen, handleClose} = useContext(SidebarContext)

//   const {cart,clearCart, total} = useContext(CartContext)

//   return (

//     <div className={`${isOpen ? 'right-0' : '-right-full'}
//     w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 lg:px-[35px] mt-20`}>
     

//      <div className='flex items-center justify-between py-6 border-b'>

//       <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>

//        {/* icon */}


//       <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
//         <AiOutlineArrowRight 
//         className='text-2xl'/>
//       </div>

//      </div>

    

//     {/* // scroll bar for cart items in div */}

//      <div className='flex flex-col gap-y-2 h-[300px] lg:h-[310px] sm:h-[330px] overflow-y-auto overflow-x-hidden' >
//      {cart.map((item) => {

//       return <CartItem item ={item} key={item.id}/>
//      })}
//       </div>

//    {/* Total sub price bottom */}
//    <div className=''>
    
//     {/*in this below div X - clear symbol came to the right hand side using with flex  */}
//     <div className=' flex w-full justify-between items-center bg-red-200' style={{borderBottomRightRadius:'50px', borderTopRightRadius:'50px'}}>
//       {/* Total  */}
//       <div className='font-bold'> 
//      <span className='ml-2'>TOTAL : </span> $ {parseFloat(total).toFixed(2)}
//       </div>



//       {/* clearcart icon or DELETE  */}
  
//       <div onClick={clearCart} className=' cursor-pointer py-4 bg-red-500 w-20 h-12 flex justify-center items-center text-xl ' style={{borderRadius:'10px',}}>
//           <MdDeleteForever /> Clear 
//       </div>
//     </div>

//     {/* Order Now  */}
//     <div className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium h-[20px] cursor-pointer'>
//       Order Now
//     </div>

//    </div>
//     </div>
//   )
// }

// export default Sidebar



 // step65: Footer.js



// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='bg-primary py-12'>
//       <div className='container mx-auto'>
//         <p className='text-white text-center'>Copyright &copy; FashionStore 2023. All rights reserved</p>
//       </div>
//       </footer>
//   )
// }
// export default Footer



// step66: ProductDetails.js


// import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import { CartContext } from '../contexts/CartContext'
// import { ProductContext } from '../contexts/ProductContext'


// const ProductDetails = () => {

//   // getting product id from the URL
//   const {id} = useParams()
//   const {products} = useContext(ProductContext)
//   const {addToCart} = useContext(CartContext)

//   // getting single product based on id 
//   const product = products.find((item)=>{

//     return item.id === parseInt(id)
//   });

//   // if product is not found 
//   if (!product){

//     return <section className='h-screen flex justify-center'>Loading...</section>
//   }
//   // destructuroing product 
//   const {title, price, description, image} = product;


//   return (
    
//     <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
//       <div className='container mx-auto'>
          
//           {/* image and text wrapper  */}
//           <div className='flex flex-col lg:flex-row items-center'>

         
//       {/* image  */}
//       <div className='ml-8'>
//         <img className='max-w-[150px] lg:max-w-170' src={image} alt=''/>
//       </div >
     
     
//         {/* text  */}
//       <div className='flex-1 text-center lg:text-left ml-12 mt-2'>
//         <h1 className='text-[26px] font-medium mb-1 max-w-[450px] mx-auto lg:mx-0'>
//               {title}
//         </h1>
//         <div className='text-xl text-red-500 font-medium mb-6'>
//           $ {price}
//         </div>
//         <p className='mb-8'>{description}</p>

//         <button onClick={()=>addToCart(product,product.id)} className='bg-primary py-4 px-8 text-white mr-4'>
//             Add to cart
//         </button>
//       </div>
//       </div>
//       </div>
//     </section>
//   )
// }
// export default ProductDetails



// step67: sidebar.js - shopping bag added 0


{/* <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div> */}



// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/SidebarContext'
// import {AiOutlineArrowRight} from 'react-icons/ai'
// import { CartContext } from '../contexts/CartContext'
// import CartItem from './CartItem'
// import {MdDeleteForever} from 'react-icons/md';
// import { Link } from 'react-router-dom'


// const Sidebar = () => {

//   const {isOpen, handleClose} = useContext(SidebarContext)

//   const {cart,clearCart, total, itemAmount} = useContext(CartContext)

//   return (

//     <div className={`${isOpen ? 'right-0' : '-right-full'}
//     w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 lg:px-[35px] mt-20`}>
     

//      <div className='flex items-center justify-between py-6 border-b'>

//       <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>

//        {/* icon */}


//       <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
//         <AiOutlineArrowRight 
//         className='text-2xl'/>
//       </div>

//      </div>

    

//     {/* // scroll bar for cart items in div */}

//      <div className='flex flex-col gap-y-2 h-[300px] lg:h-[310px] sm:h-[330px] overflow-y-auto overflow-x-hidden' >
//      {cart.map((item) => {

//       return <CartItem item ={item} key={item.id}/>
//      })}
//       </div>

//    {/* Total sub price bottom */}
//    <div className=''>
    
//     {/*in this below div X - clear symbol came to the right hand side using with flex  */}
//     <div className=' flex w-full justify-between items-center bg-red-200' style={{borderBottomRightRadius:'50px', borderTopRightRadius:'50px'}}>
//       {/* Total  */}
//       <div className='font-bold'> 
//      <span className='ml-2'>TOTAL : </span> $ {parseFloat(total).toFixed(2)}
//       </div>



//       {/* clearcart icon or DELETE  */}
  
//       <div onClick={clearCart} className=' cursor-pointer py-4 bg-red-500 w-20 h-12 flex justify-center items-center text-xl ' style={{borderRadius:'10px',}}>
//           <MdDeleteForever /> Clear 
//       </div>
//     </div>

//     {/* Order Now  */}

//     <div className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium h-[20px] cursor-pointer'>
//       Order Now
//     </div>
  
//    </div>
//     </div>
//   )
// }

// export default Sidebar
