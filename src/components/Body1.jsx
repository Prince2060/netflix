import React from 'react'

export default function Body1() {
  return (
    <div className='font-semibold bg-black text-white'>
      <div className='flex justify-around mt-[0px] items-center sticky top-[0px]' >
        <div className='text-red-600 font-semibold  text-[50px]  '>NETFLIX</div>
        <button className='bg-red-600  p-[10px] px-[20px] rounded-[12px]'>Sign In</button>
      </div>
      <div className='text-[50px]  mt-[200px] text-center'>Unlimited movies,TV shows,and more</div>
      <div className='text-[30px]  mt-[20px] text-center'>Plans now start at USD2.99/month</div>
      <div className='text-[25px]  mt-[20px] text-center'>Ready to watch? Enter your email to create or restart your membership.</div>
      <div className='gap-[30px] flex items-center pt-[40px] mt-[20px] justify-center pb-[200px]'>
        <input placeholder='Email address' type="text" className='bg-gray-600 py-[15px] rounded-[8px] sm:pr-[200px]  border border-white pl-3 opacity-[0.7]' />
        <button className='bg-red-600 p-[10px]  rounded-[8px] flex gap-[5px] text-[25px] hover:bg-red-700 cursor-pointer  px-[20px]'>
          <div className=''>Get Started</div>
          <div className='rotate-90'>^</div>
        </button>
      </div>
<div className='border-4 border-gray-500'></div>

    </div>
  )
}
