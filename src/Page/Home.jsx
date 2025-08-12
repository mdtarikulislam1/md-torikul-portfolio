import React from 'react'
import Profile from './Profile'
import SkillsMarquee from './SkillsMarquee'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
  return (
    <div>
       <Profile/>
      <div className='maxwidth'>
         <SkillsMarquee></SkillsMarquee>
      </div>
      <About></About>
      <Projects></Projects>
    </div>
  )
}
