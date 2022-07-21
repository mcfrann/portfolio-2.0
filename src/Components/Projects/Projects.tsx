import './Projects.scss'
import newProjs from '../../projects.json'
import ProjectTile from '../ProjectTile/ProjectTile'
import { useState, useRef, useEffect } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(true)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const current = domRef.current
    if (!current) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => {
      const current = domRef.current
      if (!current) return
      return observer.unobserve(domRef.current)
    }
  }, [])

  const tiles = newProjs.applications
    .map((proj) => {
      return (
        <ProjectTile
          key={proj.id}
          id={proj.id}
          name={proj.name}
          repo={proj.repo}
          deployed={proj.deployed}
          image={proj.image}
        />
      )
    })
    .sort((b, a) => {
      return a.props.id - b.props.id
    })

  return (
    <section className='projects-section'>
      <h1 className='title'>Projects</h1>
      <div
        className={`projects-wrapper ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {tiles}
      </div>
    </section>
  )
}

export default Projects
