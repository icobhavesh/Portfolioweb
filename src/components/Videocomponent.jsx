import React, { useState } from 'react'
import ProjectData from './ProjectData'
// import video from "/src/assets/Bitcoin.mp4"
const Videocomponent = () => {
  const [data, setData] = useState(ProjectData)

  return (
    <div className='w-full  h-auto  text-gray-300 bg-[#0a192f] pt-32'>
      <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center  w-full '>
        <div className='pb-8 w-full flex justify-center items-center flex-col mt-20  md:pt-10 '>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl whitespace-nowrap  font-bold'>Check out some of my most recent work</p>
        </div>
        {
          data.map((ele, idx) => (
            <div key={idx} className='md:flex   gap-4  m-4 shadow-2xl  shadow-slate-950  '>

              <video controls width="500" height="400" className='p-4   '  >
                <source src={ele.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className=' flex-col flex justify-center items-center p-5'>
                <h1 className='text-3xl text-yellow-400'>{ele.Name}</h1>
                <p className='text-white flex-nowrap'>{ele.Description} </p>
                <a className='b-1 p-1 mt-4  outline-none bg-purple-500 text-white' href='https://currencytracker-hjb3gtvbd-bhavesh-s-projects.vercel.app
'>Visit Website</a>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Videocomponent

// 