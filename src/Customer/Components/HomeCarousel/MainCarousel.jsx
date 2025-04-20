import React from 'react';
import AliceCarousel, { AutoplayDirection, AutoPlayStrategy } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCrouseldata } from './MainCarouselData';
const MainCarousel = () => {
    const items = mainCrouseldata.map((item)=> <img className='cursor-pointer'
    role = 'presentation' src={item.image} alt=''/>)

   return (      

      <AliceCarousel
       items={items}
       
       disableButtonsControls
       autoPlay
       autoPlayInterval={1000}
       infinite

       />
       
   )

}

export default MainCarousel