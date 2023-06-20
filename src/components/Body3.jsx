import React from 'react'
import iphone from '../images/iphone.png'
import strange from '../images/strange.webp'
import strange1 from '../images/strange1.png'
import { HiDownload } from 'react-icons/hi';
export default function Body3() {
  return (
    <div className='bg-black text-white relative pt-[100px]'>
      <div className='border-4  border-gray-500'></div>
      <div className='flex justify-center gap-[100px]'>
      <div className='flex items-center gap-[100px]'>
        <img src={iphone}  className=''/>
        <img src={strange} className='absolute h-[350px] w-[200px] top-[170px] left-[450px]'/>
        <div className='border-2 border-grey bg-black flex items-center gap-5 absolute bottom-[95px] left-[395px]'>
          <img src={strange1} className='h-[100px] w-[80px] '/>
          <div>
          <div className='text-[18px]'>Stranger Things</div>
          <div className='text-blue-600'>Downloading...</div>
        </div>
        <div>
          <HiDownload  className='text-[20px]'/>
        </div>
      </div>
      <div>
        <div className='text-[50px] font-[800]'>Download your shows</div>
        <div className='text-[50px] font-[800]'>to watch offline</div>
        <div className='text-[30px]'>save your favorites easily and always have something</div>
        <div className='text-[30px]'>to watch.</div>
      </div>
      </div>
    </div>
    <div className='border-4  border-gray-500'></div>
    </div>
  )
}
