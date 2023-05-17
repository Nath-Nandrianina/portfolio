import React, { useEffect, useState } from 'react'
import './project.css'
import { projectDatas } from '../../data/projectData'
import { Link } from 'react-router-dom'
import { FaCalendar, FaInfo, FaPlus } from 'react-icons/fa'


const Project = (props) => {
    const [datas, setDatas] = useState([]);
    
    useEffect(()=>{
        setDatas(projectDatas[0].FR["allProjects"])
    }, [])

  return (
    <div className='project'>
        {
            datas.map(item =>{
                return(
 
                <div className='project-container' key={item.id}>
                    
                    <div className='project-first'>

                        <h1 className='project-title'>
                                {item.title}
                        </h1>
                        <span className='time'>
                        <FaCalendar className='icon'/> {item.time}
                        </span>
                        <p>
                            {item.summary}
                        </p>
                        <div className='more'>
                            <h5><FaInfo className='icon'/>{item.info}</h5>
                                <Link to={`/project/${item.title.replace(/\s+/g, "").trim()}`} className='underline'>
                                    <h6> <FaPlus className='icon'/>  More...</h6>
                                </Link>
                            
                        </div>

                    </div>

                    <div className='project-last'>
                    <Link
                        to={{
                        pathname: `/project/${item.title.replace(/\s+/g, "").trim()}`,
                        }}
                    >
                        <img src={item.image}  alt={item.title} />
                    </Link>               
                    </div>   
                </div>   
                )
            })
        }
       
    
    </div>
  )
}

export default Project