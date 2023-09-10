import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5'>
        <div>
            <h1 className="text-7xl"> Len's Daily Blog</h1>
            <h2 className="mt-5 md:mt-0">Everything in 1 stop</h2>
        </div>

        <p className="mt-5">
            React | Next
        </p>
    </div>
  )
}

export default Banner