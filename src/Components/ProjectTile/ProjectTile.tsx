import './ProjectTile.scss'

const ProjectTile = ({ key, id, name }) => {
  return (
    <section className='project-tile'>
      <h1 className='proj-name'>{name}</h1>
    </section>
  )
}

export default ProjectTile
