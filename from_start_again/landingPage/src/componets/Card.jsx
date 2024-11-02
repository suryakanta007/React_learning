import React from 'react'

function Card({heading="Brand Identity Design"}) {
  return (
    <div className='max-w-80  rounded-2xl border-teal-700 border-y-4 px-5 py-24 shadow-lg shadow-black'>
        <h1 className='text-2xl text-center font-bold mb-3'>{heading}</h1>
        <p className='text-center'>Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.</p>
    </div>
  )
}

export default Card