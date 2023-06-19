"use client";

import './page.scss'

import Linkedin from './assets/linkedin.svg'
import Github from './assets/github.svg'
import Brasil from './assets/brasil.png'
import { useEffect } from 'react'
import Images from './components/images/images';

export default function Home() {

  useEffect(() => {
    console.log(Linkedin)
  }, [])

  return (
    <div className='page-content'>
      <div className="left-content">
        <span className='person-name'>isaque matos</span>
        <span className='cargo'><i>Software Developer</i></span>

        <span>Experience</span>
        <p>2 years working as a Software Developer at the Universidade Federal de Sergipe and at Sergipe Parque Tecnológico.</p>

        <span>Education</span>
        <p>Computer Technician | Federal Institute of Sergipe</p>

        <span>Technologies</span>
        <div className='technologies-icons'>
          <Images nome={'Laravel'} size={61}></Images>
          <Images nome={'React'} size={61}></Images>
        </div>

      </div>

      <div className="center-content">
        <Images nome={'Me'} size={578}></Images>
      </div>

      <div className="right-content">

        <span>Languages</span>
        <Images nome={'Eua'} size={50}></Images>
        <p>EN Tech Level</p>

        <Images nome={'Brasil'} size={35}></Images>
        <p>PT-BR Native Speaker</p>

        <Images nome={'Linkedin'} size={60}></Images>
        <Images nome={'Github'} size={60}></Images>

        <button className='contact-me'><a href='mailto:isaquehmc@outlook.com'><img src="./assets/email.svg" width='25' />CONTACT ME</a></button>
      </div>


    </div>
  )
}
