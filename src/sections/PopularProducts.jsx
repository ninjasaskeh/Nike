import { products } from '../constants'
import PopularPruductsCard from '../components/PopularPruductsCard'
import React from 'react'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-center gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our 
          <span className='text-coral-red'> Popular</span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Ni Barang-barang disini semua bagus-bagus gann, sumpah ane mah.ni pada dipake ama artis gan, siapa yang ga suka ama sepatu jordan gan? Pokoknya Ini mantep dah.</p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((products) => (
          <PopularPruductsCard key={products.name} {...products} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts