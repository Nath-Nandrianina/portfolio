import React from 'react'
import './projects.css'
import TitleHeading from '../../common/title/TitleHeading'
import Project from '../../components/project/Project'

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projects-container'>
            <TitleHeading >
                Project
            </TitleHeading>

            <Project/>
        </div>
    </div>
  )
}

export default Projects