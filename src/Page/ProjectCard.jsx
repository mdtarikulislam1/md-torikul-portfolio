import React from 'react'
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { Link } from 'react-router';

export default function ProjectCard({d}) {
    console.log(d)
  return (
    <div className='max-w-11/12 mx-4 bg-gray-100 rounded-b-sm'>
        <iframe height={400} src={d?.live} frameborder="0"></iframe>
        <div className='py-5 px-4'>
            <h4 className='font-semibold  text-xl'>{d?.["project-name"]}</h4>
            <div className='flex justify-between items-center pt-4'>
                <a className='text-blue-400' href={d?.live}><LiaExternalLinkSquareAltSolid  size={35}/></a>
                <button className='bg-blue-400 hover:bg-blue-600 px-3 py-2 rounded-sm'><Link to={`/details/${d?.id}`}>Details</Link></button>
            </div>
        </div>
    </div>
  )
}
