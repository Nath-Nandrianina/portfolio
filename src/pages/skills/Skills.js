import React, {useState, useEffect} from 'react'
import './skills.css'
import TitleHeading from '../../common/title/TitleHeading'
import ProgressBar from '../../components/progressBar/ProgressBar'
import { skillsData } from '../../data/projectData'

const Skills = () => {

    const [image, setImage] = useState([])

    useEffect(()=>{
        setImage(skillsData)
    }, [])


    const rightData = [
        
        { id : '5', bgcolor: "#e32a2c", completed: 53, img:image[4], name: 'Java'},
        { id : '6',bgcolor: "#80bd00", completed: 50, img:image[5], name: 'Node'},
        { id : '7',bgcolor: "#61dafc", completed: 60, img:image[6], name: 'React'},
        { id : '8',bgcolor: "#9b4e96", completed: 50, img:image[7], name: 'C#'},          
      ];

      const leftData = [
        { id : '1', bgcolor: "#e44c25", completed: 75, img:image[0] , name: 'HTML 5' },
        { id : '2', bgcolor: "#0170ba", completed: 75, img: image[1], name:'CSS 3'},
        { id : '3', bgcolor: "#eaca32", completed: 60, img:image[2], name: 'JavaScript'},
        { id : '4', bgcolor: "#6781bb", completed: 45, img: image[3], name: 'PHP' },
      ]
 
  return (
    <div className='skills'>
       
        <div className='skills-container'>
        <TitleHeading>
           langage de Programmation
        </TitleHeading>

        <div className='skills-language'>

            <div className='language-left'>
                
            {leftData.map((item, idx) => {
                    
                    return(
                        <div className='left-container'>
                            <img className='icon' src={process.env.PUBLIC_URL + `${item.img}`} alt={item.name}/>
                            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                        </div>
                    )
            })}
            </div>

            <div className='language-right'>
            {rightData.map((item, idx) => {
                    
                    return(
                        <div className='left-container'>
                             <img className='icon' src={process.env.PUBLIC_URL + `${item.img}`} alt={item.name}/>
                            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                        </div>
                    )
                })}
            </div>
        </div>


            <TitleHeading>
                Outils & autres
            </TitleHeading>
            
            <div className='tools-container'>

               
                <div className='first-tools'>
                    <div className='tools-content'>
                        <h3>Mysql</h3>
                    </div>
                    
                    <div className='tools-content'>
                        <h3>Merise</h3>
                    </div>

                    <div className='tools-content'>
                        <h3>Agile</h3>
                    </div>

                    <div className='tools-content'>
                        <h3>POO</h3>
                    </div>
                </div>
                <div className='second-tools'>
                    <div className='tools-content'>
                        <img className='icon-tools' src={process.env.PUBLIC_URL + `${image[8]}`} alt="img"/>
                            <h3>Figma</h3>
                        </div>

                        <div className='tools-content'>
                        <img className='icon-tools' src={process.env.PUBLIC_URL + `${image[9]}`} alt="img"/>
                            <h3>Git</h3>
                        </div>

                        <div className='tools-content'>
                        <img className='icon-tools' src={process.env.PUBLIC_URL + `${image[10]}`} alt="img"/>
                            <h3>Linux</h3>
                        </div>

                        <div className='tools-content'>
                        <img className='icon-tools' src={process.env.PUBLIC_URL + `${image[11]}`} alt="img"/>
                            <h3>PhotoShop</h3>
                        </div>
                    </div>
                </div>


                
               

            <TitleHeading>
                langues
            </TitleHeading>
           
            <div className='language-container'>
                
                <div className='language-content'>
                    <h2>Anglais</h2>
                    <img src={process.env.PUBLIC_URL + `${image[12]}`}  alt="langue"/>
                </div>
                <div className='language-content'>
                    <h2>Francais</h2>
                    <img src={process.env.PUBLIC_URL + `${image[13]}`}  alt="langue"/>
                </div>
                <div className='language-content'>
                    <h2>Malagasy</h2>
                    <img src={process.env.PUBLIC_URL + `${image[14]}`}  alt="langue"/>
                </div>
                
            </div>
           
        </div>
    </div>
  )
}

export default Skills

