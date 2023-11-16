import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'> 
        <h2 className='font-palanquin text-4xl capatilize font-bold lg:max-w-lg'>
          We Provide You
          &nbsp;
          <span className='text-coral-red inline-block mt-3'>Super </span>
          &nbsp;
          <span className='text-coral-red inline-block mt-3'> Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam amet beatae molestiae ut similique autem adipisci ducimus porro neque temporibus quaerat blanditiis aperiam cumque repellat nostrum possimus, et accusantium.
        </p>
        <p className='mt-6 lg:max-lg info-text'>Our dedication to detail and excellent ensures and your satisfaction</p>
        <div className='mt-11'>
          <Button label='View Details'/>
        </div>
      </div>
      
      <div className='flex flex-1 justify-center items-center'>
        <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className='object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality