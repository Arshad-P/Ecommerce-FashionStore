import React from 'react'
import HeroWomenBanner from '../img/woman_hero.png' 
import { Link } from 'react-router-dom'

const Hero = () => {

  
const HeroBanner = 'https://img.freepik.com/premium-photo/happy-young-women-with-shopping-bags-white-background_392895-187459.jpg'

  return (
   
    <section className=' h-[450px] bg-no-repeat bg-cover bg-center py-20'>
     <div className='container mx-auto flex justify-around mt-10'>
        {/* text  */}
    <div className='flex'>
        
      <div className='mt-20 text-2xl font-semibold'>
        New Trends  
       <br/>
    Diwali Dhamaka
</div>  

        
   
    </div>
         {/* image  */}
         <div className='w-[300px] mt-10 '>
          <img src={HeroBanner} alt=''/>
         </div>
     </div>
    </section>
  )
}

export default Hero