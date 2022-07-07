import './Video.scss'
const video = require('../../Images/background-vid.mp4')

const Video = () => {
  return (
    <div className='video-wrapper'>
      <video id='background-video' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
    </div>
  )
}

export default Video
