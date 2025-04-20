import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
     overflow-hidden w-[15rem] mx-3'>  
     <div className='h-[13rem] w-[12rem]'>
    <img className='object-cover object-top w-full h-full'
      src = "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/u/m/o/xl-tbh-ballack-bl-the-bear-house-original-imah3zwbgzgegtg2.jpeg?q=70"/>
     </div>

       <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900 text-center'>
          THE BEAR HOUSE
        </h3>
        <p className='mt-2 text-sm text-gray-500 text-center'>Men Slim Fit Striped Button Down Collar Casual Shirt</p>
       </div>

    </div>
  )
}

export default HomeSectionCard
