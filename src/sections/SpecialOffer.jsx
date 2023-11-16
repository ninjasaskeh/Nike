import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10'>
      <div className='flex-1'>
        <img src={offer} alt="imgoffer" width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'> 
        <h2 className='font-palanquin text-4xl capatilize font-bold lg:max-w-lg'>
          <span className='text-coral-red inline-block mt-3'>
            Special
          </span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam amet beatae molestiae ut similique autem adipisci ducimus porro neque temporibus quaerat blanditiis aperiam cumque repellat nostrum possimus, et accusantium.
        </p>
        <p className='mt-6 lg:max-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste consequuntur pariatur ipsa rerum fuga incidunt quia excepturi minima quam.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop Now' iconURL={arrowRight}/>
          <Button label='Learn More' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer