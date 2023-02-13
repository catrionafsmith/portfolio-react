import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
// import ReactImg from '../assets/react.png'
// import Tailwind from '../assets/tailwind.png'
import GitHub from '../assets/github.png'
import Python from '../assets/python-icon.png'
import Bootstrap from '../assets/bootstrap.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="html" />
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="css" />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="bootstrap" />
                    <p>Bootstrap</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="python" />
                    <p>Python</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="github" />
                    <p>GitHub</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills