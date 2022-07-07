import './App.scss'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
const video = require('./background-vid.mp4')

const App = () => {
  return (
    <div className='App'>
      <div className='video-wrapper'>
        <video id='background-video' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <Header />
      <Main />
    </div>
  )
}

export default App
