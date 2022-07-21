import './ProjectTile.scss'
import github from '../../Images/github.png'
import hyperlink from '../../Images/hyperlink.png'

interface ProjectInfo {
  key: number
  id: number
  name: string
  repo: string
  deployed: string
  image: string
}

const ProjectTile = (props: ProjectInfo) => {
  return (
    <div className='project-tile'>
      <div className='proj-info'>
        <a
          href={props.deployed === '' ? props.repo : props.deployed}
          target='_blank'
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <h1 className='proj-name'>{props.name}</h1>
        </a>
        <a
          href={props.deployed === '' ? props.repo : props.deployed}
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          <img
            className='proj-pic'
            src={props.image}
            alt={`${props.name} project image`}
          />
        </a>
        <div className='click-links'>
          <a
            href={props.repo}
            target='_blank'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <img className='project-link' src={github} alt='github repo link' />
          </a>
          {props.deployed !== '' && (
            <a
              href={props.repo}
              target='_blank'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <img
                className='project-link'
                src={hyperlink}
                alt='deployed site link'
              />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectTile
