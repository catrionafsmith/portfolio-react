import React from 'react'
import TAi from '../assets/tai.png'
import realEstate from '../assets/realestate.jpg'
import WorkImg from '../assets/workImg.jpeg'
import LearnCode from '../assets/learncodeempower.png'
import Bored from '../assets/areyoubored.png'
import Scotland from '../assets/scotland.png'
import Vogon from '../assets/vogon.png'
import Etch from '../assets/etchasketch.png'



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/* Grid Item */}
                <div 
                style={{ backgroundImage: `url(${TAi})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Open AI API Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://teacherai.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo</button>
                            </a>
                            <a href="https://github.com/catrionafsmith/tai">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                  {/* Grid Item */}
                  <div 
                style={{ backgroundImage: `url(${LearnCode})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Chatbot Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://learncodeempower.netlify.app/chatbot.html">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo</button>
                            </a>
                            <a href="https://github.com/catrionafsmith/learncodeempower">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                 {/* Grid Item */}
                 <div 
                style={{ backgroundImage: `url(${Bored})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Flask Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="http://oldfashioned891.pythonanywhere.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo</button>
                            </a>
                            <a href="https://github.com/catrionafsmith/are_you_bored">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                  {/* Grid Item */}
                  <div 
                style={{ backgroundImage: `url(${Scotland})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Soundboard
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://catrionafsmith.github.io/scot_v_aus_soundboard/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo</button>
                            </a>
                            <a href="https://github.com/catrionafsmith/scot_v_aus_soundboard">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 {/* Grid Item */}
                 <div 
                style={{ backgroundImage: `url(${Vogon})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Python Poetry
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/catrionafsmith/vogon-poetry">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo</button>
                            </a>
                            <a href="https://github.com/catrionafsmith/vogon-poetry">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                  {/* Grid Item */}
                  <div 
                style={{ backgroundImage: `url(${Etch})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Etch-A-Sketch Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://catrionafsmith.github.io/etch-a-sketch/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo</button>
                            </a>
                            <a href="https://github.com/catrionafsmith/etch-a-sketch">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work