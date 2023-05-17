import React from 'react'
import './titleHeading.css'

const TitleHeading = ({children, props}) => {
  return (
    <div className='titleHeading'> 
          {children}
        <p className='bars'></p>
    </div>
  )
}

export default TitleHeading