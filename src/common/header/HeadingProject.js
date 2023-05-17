import React from 'react'
import './headingProject.css'

const HeadingProject = (props) => {
  return (
    <div className='headingProject'>
       <div className='headingProject-container'>
            <h1> {props.name} </h1>
       </div>
        
    </div>
  )
}

export default HeadingProject