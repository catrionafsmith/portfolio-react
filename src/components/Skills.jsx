import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/JavaScript.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import GitHub from '../assets/github.png'


const Skills = () => {
  return (
    <div name='skills'>
        {/* Container */}
        <div>
            <div>
                <p>Experience</p>
                <p>These are the technologies I've worked with</p>
            </div>
            <div>
                <img src={HTML} alt="html" />
            </div>
        </div>
    </div>
  )
}

export default Skills