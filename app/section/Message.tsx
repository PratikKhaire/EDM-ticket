import React from 'react'
import FlavorSlider from '../components/FlavorSlider'

const Message = () => {
  return (
    <>
      <section className='message-section'>
        {/* Centered Heading */}
        <div className='flex items-center justify-center pt-16  bg-red-500'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#6f0080] text-transparent bg-clip-text text-center'>
            Trending Events
          </h1>
        </div>

        {/* Slider Section */}
        <div className='h-full flex lg:flex-row flex-col items-center relative bg-blue-500'>
            {/* <div className='lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0'>
              {/* <FlavorTitle/> */}
            {/* </div> */} 
            <div className="h-full pl-20 ">
              <FlavorSlider/>
            </div>
        </div>
      </section>
     
      
    </>
  )
}

export default Message
