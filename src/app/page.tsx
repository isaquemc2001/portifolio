"use client";

import './page.scss'
import Images from './components/images/images';

export default function Home() {
  return (
    <div className='page-content'>
      <div className="left-content">
        <span>isaque matos</span>
        <span>Software Developer</span>
      </div>
      <div className='left-content2'>
        <span>Experience</span>
        <p>2 years working as a Software Developer at the Universidade Federal de Sergipe and at Sergipe Parque Tecnológico.</p>

        <span>Education</span>
        <p>Computer Technician | Federal Institute of Sergipe</p>

        <span>Technologies</span>
        <div>
          <Images nome={'Laravel'}></Images>
          <Images nome={'React'}></Images>
        </div>

      </div>

      <div className="center-content">
        <Images nome={'Me'}></Images>
      </div>

      <div className="right-content">
        <span>Languages</span>
        <div>
          <div className='languages'>
            <Images classname={'eua'} nome={'Eua'}></Images>
            <p>EN Tech Level</p>
          </div>

          <div className='languages'>
            <Images classname={'brasil'} nome={'Brasil'}></Images>
            <p>PT-BR Native Speaker</p>
          </div>
        </div>

        <div>
          <a href="#" target='_blank'>
            <Images nome={'Linkedin'} size={60}></Images>
          </a>
          <a href="#" target='_blank'>
            <Images nome={'Github'} size={60}></Images>
          </a>
        </div>

        <a href='mailto:isaquehmc@outlook.com'>
          <button>
            <Images nome={'Mail'} size={25}></Images>
            CONTACT ME
          </button>
        </a>
      </div>


    </div>
  )
}
