import './About.scss'
import pic from '../../Images/about-pic.jpg'
import github from '../../Images/github.png'
import linkedin from '../../Images/linkedin.png'
import email from '../../Images/email.png'
import photo from '../../Images/photo.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
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
            and i am a creative software developer. as an artist, i approach my
            work with a passion for the intersection of visually striking web
            pages and engaging functionality. inspired by brainstorming creative
            software solutions and implementing strong design principles, the
            front end has become one of my favorite mediums. recently i've been
            enjoying experimenting with new photography techniques, scouring
            facebook marketplace for mid-century pieces, diving into gsap
            animations, and playing elden ring.
          </p>
          <div className='link-container'>
            <a href='https://github.com/mcfrann' target='_blank'>
              <img src={github} alt='github button' className='link-icon' />
            </a>
            <a
              href='https://www.linkedin.com/in/francesca-mcconnell/'
              target='_blank'
            >
              <img src={linkedin} alt='linkedin button' className='link-icon' />
            </a>
            <a href='mailto:fmcconnell59@gmail.com'>
              <img src={email} alt='email button' className='link-icon' />
            </a>
            <a
              href='https://www.francescamcconnell.com/'
              target='_blank'
              className='link-icon'
            >
              <img
                className='link-icon'
                src={photo}
                alt='link to francescas photography site'
              />
            </a>
          </div>
        </div>
        <img className='about-pic' src={pic} alt='photo of francesca' />
      </div>
    </section>
  )
}

export default About
