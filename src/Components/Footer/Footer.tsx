import './Footer.scss'
import Links from '../Links/Links'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-info'>
        <div className='footer-text'>
          <h2 className='footer-name'>francesca mcconnell</h2>
          <h2 className='footer-name'>M fmcconnell59@gmail.com</h2>
        </div>
        <div className='link-container footer-links'>
          <Links />
        </div>
      </div>
    </section>
  )
}

export default Footer
