import React from 'react'
import kids from '../images/kids.png'
function Body5() {
  return (
    <div>
    <div className='flex justify-center bg-black text-white items-center pt-[50px]'>
      <img src={kids}/>
      <div>
        <div className='text-[50px]'>Create profiles for</div>
        <div className='text-[50px]'>kids</div>
        <div className='text-[30px]'>Send kids on adventures with their favorite characters</div>
        <div className='text-[30px]'>in a space made just for them - free with your</div>
        <div className='text-[30px]'>membership.</div>
      </div>
    </div>
    <div className='border-4  border-gray-500'></div>
    </div>
  )
}

export default Body5