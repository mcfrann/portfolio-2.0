import './Links.scss'
import github from '../../Images/github.png'
import linkedin from '../../Images/linkedin.png'
import email from '../../Images/email.png'
import photo from '../../Images/photo.png'
import spotify from '../../Images/spotify.png'

const Links = () => {
  return (
    <>
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
      <a
        href='https://open.spotify.com/playlist/5vYRRGnb0KaB8tsVihyN5C?si=nYTLopneR-q7o_MCnN6LbQ'
        target='_blank'
        className='link-icon'
      >
        <img
          className='link-icon'
          src={spotify}
          alt='link to francescas spotify playlist'
        />
      </a>
    </>
  )
}

export default Links
