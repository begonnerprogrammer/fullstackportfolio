import React from 'react'

const Skill = ({src}) => {
  return (
    <div className='group relative flex cursor-pointer '>
      <img src={src} alt="" className='rounded-full bg-black border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out' />

    </div>
  ) 
}

export default Skill
