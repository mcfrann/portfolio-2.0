import './App.scss'
import Video from './Components/Video/Video'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <Video />
      <Header />
      <Main />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
