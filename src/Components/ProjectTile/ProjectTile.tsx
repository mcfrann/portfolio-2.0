import './ProjectTile.scss'

interface ProjectInfo {
  key: number
  id: number
  name: string
}

const ProjectTile = (props: ProjectInfo) => {
  return (
    <section className='project-tile'>
      <h1 className='proj-name'>{props.name}</h1>
    </section>
  )
}

export default ProjectTile
