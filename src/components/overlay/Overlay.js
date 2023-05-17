import React, {useEffect, useState} from 'react'
import './overlay.css'
import { useParams, Link } from 'react-router-dom'
import { projectDatas } from '../../data/projectData'
import { RxCross2} from 'react-icons/rx'
import TitleHeading from '../../common/title/TitleHeading'


const Ovrelay = () => {
  const {myData, id} = useParams();

  const [theProject, setTheProject] = useState({})
  const [loading, setLoading] = useState(false)
 
useEffect(()=>{
    const projectIndex = projectDatas[0].FR["allProjects"].findIndex(obj => obj.title.replace(/\s+/g, "").trim() === id) 
  if(projectIndex !== -1){
    const singleProject = projectDatas[0].FR.allProjects[projectIndex].singlePage.filter(item => item.id2 === parseInt(myData));
    setTheProject(singleProject[0]);
    setLoading(true);
  }
  },[id, myData])

//console.log(theProject.projectImg.length > 0 ? ("mihoatra") : (" tsy mihoatra"));

  return loading && (
    <div className='overlay'>
      <div className='overlay-container'>
          
          <div className='overlay-content'>

            {/* project Table lenght ? */}
            {
              theProject.projectImg.length > 1 ? 
              ( 
              <div className='overlay-left perso'>
                {
                  theProject.projectImg.map((item, index)=>{
                    return(
                      <img className="imagesProject" key={index} src={item} alt="single img project"/>
                    )
                  })
                }
              </div>
              )
              :
              (  
              <div className='overlay-left'>
                <img className=  {` ${theProject.special ? (`specialImageProject`) : ("simpleImageProject") }`} src={theProject.projectImg} alt={theProject.title2}/>
              </div>
              )
            }
           
            <div className='overlay-right'>
            <TitleHeading>{theProject.title2}</TitleHeading>
                 <p>{theProject.description2} </p>
            </div>
          </div>
         
          
      </div>
      <Link to={`/project/${id}`}>
         <div className='overlay-icon'>
            <RxCross2 className='icon'/> 
        </div>
      </Link>
     
       
    </div>
  )
}

export default Ovrelay