import './ProjectTile.scss'
import React, { useState, useRef, useEffect } from 'react'

interface ProjectInfo {
  key: number
  id: number
  name: string
  repo: string
}

const ProjectTile = (props: ProjectInfo) => {
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

  return (
    <div
      className={`project-tile ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      <a
        href={props.repo}
        target='_blank'
        className='project-link'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <h1 className='proj-name'>{props.name}</h1>
      </a>
    </div>
  )
}

export default ProjectTile
