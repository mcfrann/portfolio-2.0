import './Main.scss'

const Main = () => {
  return (
    <section className='main'>
      {/* <div className='video-wrapper'>
        <video id='background-video' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
      </div> */}
      <div className='spacer'></div>
      <div className='middle-section'>
        <div className='left middle-spacer'></div>
        <div className='transparent-div'></div>
        <div className='right middle-spacer'></div>
      </div>
      <div className='spacer'></div>
    </section>
  )
}

export default Main
