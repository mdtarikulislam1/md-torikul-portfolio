import React from 'react'
import Profile from './Profile'
import MySkills from './MySkils'

export default function Home() {
  return (
    <div>
       <Profile/>
      <div className='maxwidth'>
         <MySkills/>
      </div>
    </div>
  )
}
