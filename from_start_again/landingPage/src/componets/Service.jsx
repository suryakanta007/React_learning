import React from 'react'
import Card from './Card.jsx'
function Service() {
  return (
    <div className='w-full bg-white'>
            <div className='max-w-5xl py-12 mx-auto'>
                <h1 className='text-center text-xl font-bold'>What We Offer</h1>
                <h2 className='text-6xl text-center font-serif font-bold'>Our Services</h2>
                <p className=' text-center text-lg pb-6 mb-12'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className='flex flex-col md:flex-row md:justify-between items-center gap-2 mt-6 md:mt-0 '>
                    <Card/>
                    <Card heading='Digital Marketing'/>
                    <Card heading='Development'/>
                </div>
            </div>
    </div>
  )
}

export default Service