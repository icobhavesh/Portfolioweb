import React from 'react'
import video from "../assets/Vite + React - Google Chrome 2023-11-07 21-09-11.mp4"
const Videocomponent = () => {
  return (
    <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <h1>video component</h1>
      <div  className='max-w-[1000px]  h-screen mx-auto p-4 flex flex-col justify-center  w-full h-full'>
      <h2>Video Player</h2>
      <div className='md:flex    gap-12 shadow-2xl  shadow-blue-200 '>

      <video controls width="500" height="400" className='p-4'  >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=' flex-col flex justify-center items-center p-5'>
        <h1 className='text-3xl text-yellow-400'>CryptoCurrencyProject</h1>
        <p className='text-white flex-nowrap'>hey i make this project using react router dom and chart js </p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Videocomponent
// import React from 'react';
// import video from "../assets/Vite + React - Google Chrome 2023-11-07 21-09-11.mp4";

// const Videocomponent = () => {
//   return (
//     <div className='w-full md:h-screen   text-gray-300 bg-[#0a192f]'>
//       <h1>Video component</h1>
//       <div className='max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full'>

//         <h2>Video Player</h2>
//         <div className='flex flex-col md:flex-row gap-4 shadow-2xl shadow-blue-200'>
//           <video controls className='p-4' style={{ width: '100%', maxWidth: '500px', height: 'auto' }}>
//             <source src={video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           <div className='flex flex-col justify-center items-center'>
//             <h1 className='text-3xl text-yellow-400'>CryptoCurrencyProject</h1>
//             <p className='text-white flex-nowrap'>Hey, I made this project using React Router DOM and Chart.js.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Videocomponent;

