import React from 'react'
import Section from "./common/Section";
import web from "../assests/web.png"
import { FaExternalLinkSquareAlt} from "react-icons/fa";

const Experience = () => {
  return (
     <Section 
title="Experience📈"
subtitle="Hi, I have worked in a startup company as an Frontend intern .
I have learnt how things work in the industry and got the knowledge of professional world of frontend.
."
>
<br/>
<div className='max-w-sm flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
<img src={web} alt="exp" className='w-1/2'/>
            <div className='w-1/3 flex flex-col items-center justify-evenly p-2'>
                <h2>Company's Website</h2>
                <a  className=' text-2xl cursor-pointer  hover:scale-110 text-align' href="https://karmalife.ai/" target = '_blank' rel='noopener noreferrer'>
                <FaExternalLinkSquareAlt/>
                </a>
                </div>
                </div>
</Section>
  )
}

export default Experience;
