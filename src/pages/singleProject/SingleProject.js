import React, {useEffect, useState} from 'react'
import { useParams, Link} from 'react-router-dom'
import './singleProject.css'
import HeadingProject from '../../common/header/HeadingProject'
import { projectDatas } from '../../data/projectData'
import TitleHeading from '../../common/title/TitleHeading'
import {FaLink, FaArrowLeft} from 'react-icons/fa'

// import Overlay from '../../components/overlay/Overlay'

const SingleProject = () => {
    const [mainProject, setMainProject] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(false)
 //   const [overlay, setOverlay] = useState(true)

    useEffect(()=>{
  //   const project = projectData.filter(obj => obj.title.replace(/\s+/g, "").trim() === id)
     const projects = projectDatas[0].FR["allProjects"].filter(obj => obj.title.replace(/\s+/g, "").trim() === id)
    
     if(projects !== -1){
      setMainProject(projects[0]);
      setLoading(true)
     } 
    },[id])

    return loading && (
    <div className='singleProject'>

      <HeadingProject  name={mainProject.title} />

        <div className='singleProject-container'>
         

          <div className='singleProject-content'>

            <p className='rectification'>
              {mainProject.description}
          </p>
          
            <div className='singleProject-first'>
              {
                mainProject.methode.length !== 0 && (
                   <>
                   <TitleHeading><h6>Normalisation et Methodes</h6></TitleHeading>
                  <ul>
                  {
                    mainProject.methode.map((item, index)=>{
                      return(
                        <li key={index}>
                              {item}
                        </li>
                      )
                    })
                  }
                </ul>
                </>
                )
              }
             
            </div>
            <div className='singleProject-second'>
              <TitleHeading><h6>Technologie, Langage et outils</h6></TitleHeading>
              <ul>
              {
                mainProject.technologies.map((item, index)=>{
                  return(
                    <li key={index}>
                         <span className='head'>
                          {item.head}  
                        </span> {item.body}
                    </li>
                  )
                })
              }
               </ul>
            </div>

            <div className='singleProject-last'>

            {mainProject.singlePage.map((item, index) => {
                 return  (
                    <div className='items' key={index}>
                     
                      <Link className='llink' to={`/project/${id}/${item.id2}`}>
                        
                        <div className='singleProject-parent'>
                        <img className='picture' src={item.image2}  alt={item.image2}/>
                        <h6 className='text-info'>{item.title2}</h6>
                        <FaLink className='img-link'/>
                        </div>
                     
                      </Link>  
                
                     </div> 
                  )
                })
                }
            </div>
          </div>
        </div>

        <Link to={`/project` }>
        <div className='floating-btn'>
            < FaArrowLeft className='icon'/> 
        </div>
        </Link>
    </div>
  )
 


}

export default SingleProject

/*
{
                mainProject.technologies.map((item, index)=>{
                  return(
                    <ul key={index}>
                    <li>
                          {item}
                    </li>
                    </ul>
                  )
                })
              }
*/

// eslint-disable-next-line no-lone-blocks
/*
{projectDatas[0].FR.allProjects.map((item, index) => {
                  
  return  (
    <div className='items' key={index}>
     
      <Link to={`/project/${id}/${item.id}`}>
        
        <div className='singleProject-parent'>
        <img className='picture' src={fondAccueil}  alt=""/>
        <h6 className='text-info'>{item.title}</h6>
        <FaLink className='img-link'/>
        </div>
     
      </Link>  

     </div> 
  )
})
}
*/