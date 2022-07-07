import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='top-nav header-detail'>
        <h1>Francesca McConnell</h1>
        <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>
          <h1 className='about'>About</h1>
        </Link>
      </div>
      <h1 className='header-detail'>Web development & Design</h1>
      <h1 className='header-detail'>Denver CO - Los Angeles CA</h1>
    </header>
  )
}

export default Header
