import './About.scss'
import pic from '../../Images/about-pic.jpg'
import { Link } from 'react-router-dom'
import PDF from '../../FMcConnell_CV.pdf'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <>
      <section className='about-section'>
        <header>
          <div className='top-nav header-detail'>
            <h1 className='page-title'>About</h1>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
              <h1 className='nav-link'>Home</h1>
            </Link>
          </div>
        </header>
        <div className='about-wrapper'>
          <div className='text-wrapper'>
            <p className='detail-text'>i'm franki</p>
            <p className='about-text'>
              and i am a creative software developer. as an artist, i approach
              my work with a passion for the intersection of visually striking
              web pages and engaging functionality. inspired by brainstorming
              creative software solutions and implementing strong design
              principles, the front end has become one of my favorite mediums.
              recently i've been enjoying experimenting with new photography
              techniques, scouring facebook marketplace for mid-century pieces,
              diving into gsap animations, and playing elden ring.
            </p>
            <div className='resume-container'>
              <a
                href={PDF}
                download
                target='_blank'
                className='resume-download-button'
              >
                <p className='resume-link'>download resume</p>
              </a>
            </div>
          </div>
          <img className='about-pic' src={pic} alt='photo of francesca' />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
