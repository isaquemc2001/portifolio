import './page.scss'

export default function Home() {
  return (
    <div className='page-content'>
      <span className='person-name'>isaque matos</span>
      <span className='cargo'><i>Software Developer</i></span>

      <span>Experience</span>
      <p>2 years working as a Software Developer at the Universidade Federal de Sergipe and at Sergipe Parque Tecnológico.</p>

      <span>Education</span>
      <p>Computer Technician | Federal Institute of Sergipe</p>

      <span>Technologies</span>
      <img src="./assets/laravel.png" width={61} />
      <img src="./assets/react.png" width={61} />

      <img src="./assets/imagem-portifolio.png" width={578} />

      <span>Languages</span>
      <img src="./assets/eua-logo.png" width={50} />
      <p>EN Tech Level</p>

      <img src="./assets/brasil.png" width={40} />
      <p>PT-BR Native Speaker</p>

      <img src="./assets/linkedin.svg" width={60} />
      <img src="./assets/github.svg" width={60}/>

      <button className='contact-me'><a href='mailto:isaquehmc@outlook.com'><img src="./assets/email.svg" width='25'/>CONTACT ME</a></button>

      </div>
  )
}
