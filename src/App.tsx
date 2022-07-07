import './App.scss'
import Video from './Components/Video/Video'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Projects from './Components/Projects/Projects'

const App = () => {
  return (
    <div className='App'>
      <Video />
      <Header />
      <Main />
      <Projects />
    </div>
  )
}

export default App
