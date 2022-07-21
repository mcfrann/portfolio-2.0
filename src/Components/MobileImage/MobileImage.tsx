import './MobileImage.scss'
const backgroundImg = 'images/background-img.png'

const MobileImage = () => {
  return (
    <div className='image-wrapper'>
      <img
        className='background-img'
        src={backgroundImg}
        alt='background image'
      />
    </div>
  )
}

export default MobileImage
