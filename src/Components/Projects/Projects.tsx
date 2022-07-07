import './Projects.scss'
import newProjs from '../../projects.json'
import ProjectTile from '../ProjectTile/ProjectTile'

const Projects = () => {
  const tiles = newProjs.applications
    .map((proj) => {
      return (
        <ProjectTile
          key={proj.id}
          id={proj.id}
          name={proj.name}
          // image={proj.image}
        />
      )
    })
    .sort((b, a) => {
      return a.props.id - b.props.id
    })
  //NOT WORKING for oracle

  console.log(tiles)

  return (
    <section className='projects-section'>
      <h1 className='title'>Projects</h1>
      <div className='projects-wrapper'>{tiles}</div>
    </section>
  )
}

export default Projects
