import React from 'react'
import '../images/netflix.jpg'
import netflixtv from '../images/netflixtv.png'
import video from '../images/tv-video.mp4';
export default function Body2() {
  return (
    <div className='bg-black text-white relative justify-center items-center sm:pt-[150px] pb-[100px] sm:flex sm:flex-row pt-[0px] flex flex-col  '>
      <div className='xl:mr-[200px] justify-center '>
        <div className='xl:text-[50px] font-[800] md:text-[30px] text-[40px] pl-[70px] '>Enjoy on your TV</div>
        <div className='xl:text-[30px]  font-[800] md:text-[20px] text-[25px]  pl-[70px]'>Watch on Smart TVs,Playstation,Xbox,Chromecast,</div>
        <div className='xl:text-[30px]  font-[800] md:text-[20px] text-[25px]  pl-[70px]'>Apple TV,Blu-ray players and more.</div>
      </div>
      <div className='  w-[320px] h-[160px] bg-red-500'>
        <div>
          <img src={netflixtv} className='xl:w-[400px] absolute top-[60px] right-[224px] xl:h-[300px] md:w-[250px] md:h-[150px] h-[300px] w-[350px] ml-[70px] mt-[70px]' />
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
