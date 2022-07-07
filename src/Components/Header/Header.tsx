import './Header.scss'
import { Link } from 'react-router-dom'
import rightArrow from '../../Images/arrow-right.png'

const Header = () => {
  return (
    <header>
      <div className='top-nav header-detail'>
        <h1 className='page-title'>Francesca McConnell</h1>
        <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>
          <h1 className='nav-link'>About</h1>
        </Link>
      </div>
      <div className='header-detail'>
        <h1 className='page-title'>Web development & Design</h1>
      </div>
      <div className='header-detail'>
        <h1 className='page-title'>
          Denver CO
          <img className='gif' src={rightArrow} />
          Los Angeles CA
        </h1>
      </div>
    </header>
  )
}

export default Header
