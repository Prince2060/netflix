import React from 'react'

function Body6() {
  return (
   <div className='font-[600] bg-black text-white'>
    <div className='font-[600] bg-black text-white'>
      <div className='text-[50px] text-center'>Frequently Asked Questions</div>
      <div className='flex justify-between px-[20px] ml-[400px] mt-[20px] bg-[#2d2d2d] hover:bg-[#4e4e4e] cursor-pointer items-center w-[60%]'>
        <div className='text-[30px] p-[20px]'>What is Netflix?</div>
        <div className='text-[30px]'>+</div>
      </div>
      <div className='flex justify-between px-[20px] ml-[400px] mt-[10px] bg-[#2d2d2d] hover:bg-[#4e4e4e] cursor-pointer items-center w-[60%]'>
        <div className='text-[30px] p-[20px]'>How much does Netflix cost?</div>
        <div className='text-[30px]'>+</div>
      </div>
      <div className='flex justify-between px-[20px] ml-[400px] mt-[10px] bg-[#2d2d2d] hover:bg-[#4e4e4e] cursor-pointer items-center w-[60%]'>
        <div className='text-[30px] p-[20px]'>Where can i watch</div>
        <div className='text-[30px]'>+</div>
      </div>
      <div className='flex justify-between px-[20px] ml-[400px] mt-[10px] bg-[#2d2d2d] hover:bg-[#4e4e4e] cursor-pointer items-center w-[60%]'>
        <div className='text-[30px] p-[20px]'>How do i cancel</div>
        <div className='text-[30px]'>+</div>
      </div>
      <div className='flex justify-between px-[20px] ml-[400px] mt-[10px] bg-[#2d2d2d] hover:bg-[#4e4e4e] cursor-pointer items-center w-[60%]'>
        <div className='text-[30px] p-[20px]'>What can i watch on Netflix</div>
        <div className='text-[30px]'>+</div>
      </div>
      <div className='flex justify-between px-[20px] ml-[400px] mt-[10px] bg-[#2d2d2d] hover:bg-[#4e4e4e] cursor-pointer items-center w-[60%]'>
        <div className='text-[30px] p-[20px]'>Is Netflix good for kids?</div>
        <div className='text-[30px]'>+</div>
      </div>
    </div>
    <div className='text-[25px] text-center font-[600] pt-[20px]'>Ready to watch? Enter your email to create or restart your membership</div>
    <div className='flex justify-center gap-[10px] mt-[10px] pb-[50px]'>
      <input type="text" placeholder='Email Address' className='p-[20px] pr-[250px] bg-[#0f0f0f] border-white border rounded-[5px] ' />
    <button className='bg-red-600 p-[10px]  rounded-[8px] flex gap-[5px] text-[25px] hover:bg-red-700 cursor-pointer  px-[20px]'>
          <div className=''>Get Started</div>
          <div className='rotate-90'>^</div>
        </button>
    </div>
    <div className='border-4  border-gray-500'></div>
    </div>

  )
}

export default Body6