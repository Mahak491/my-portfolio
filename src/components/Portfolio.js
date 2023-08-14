import React from 'react'
import Section from './common/Section'
import { FaGithub, FaExternalLinkSquareAlt} from "react-icons/fa";
import p1 from "../assests/p1.png";
import p2 from "../assests/p2.png";
import p3 from "../assests/p3.png";
import p4 from "../assests/p4.png"; 
import p5 from "../assests/p5.png"; 
import p6 from "../assests/p6.png";

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            image:p1,
            title:"Sorting Visualizer",
            github:"https://github.com/Mahak491/sorting_visualizer",
            demo:"https://sortttingvisualizerrr.netlify.app/"
        },
        {
            id: 2,
            image:p2,
            title:"Camera Web App",
            github:"https://github.com/Mahak491/Camera_Gallery",
            demo:"https://cameragalleryyy.netlify.app/"
        },
        {
            id: 3,
            image:p3,
            title:"Openboard clone",
            github:"https://github.com/Mahak491/my-openboard-clone",
            demo:""
        },
        {
            id: 4,
            image:p4,
            title:"Weather Web App",
            github:"https://github.com/Mahak491/weather-web-app",
            demo:"https://keen-pixie-418051.netlify.app/"
        },
        {
            id: 6,
            image:p5,
            title:"Makeup Cart",
            github:"https://github.com/Mahak491/shopping-cart",
            demo:"https://cool-cocada-d5be8f.netlify.app/index.html"
        },
        {
            id: 6,
            image:p6,
            title:"Crypto Web App",
            github:"https://github.com/Mahak491/crypto-app",
            demo:""
        }
    ]
  return (
    <Section title="Portfolio👩‍💻"
subtitle="These are all the projects that I have worked on. Some of them I have worked 
before I gained some experience. So go gentle on them.">
    <br/>
    <div className='grid gap-8 lg:gap-14 lg:grid-cols-2' >
    {projects.map(({id,image,title,github,demo})=>(
        <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
            <img src={image} alt={title} className='w-2/3'/>
            <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                <h2>{title}</h2>
                <a className='text-2xl cursor-pointer duration-150 hover:scale-110' href={github} target = '_blank' rel='noopener noreferrer'>
                    <FaGithub/>

                </a>
                <a  className='text-2xl cursor-pointer duration-150 hover:scale-110' href={demo} target = '_blank' rel='noopener noreferrer'>
                <FaExternalLinkSquareAlt/>
                </a>
                </div>
        </div>
    ))}
    </div>
    </Section>
  )
}

export default Portfolio


