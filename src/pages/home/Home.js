import React from 'react'
import '../index.css'
import './home.css'
import { Link } from 'react-router-dom'
import {resume} from '../../data/projectData'

const Home = () => {
console.log(resume);
  return (
    <div className='home'>
        <div className='home-container'>
          
         <h1>
            Bonjour,
         </h1>
            <h2>
              Je suis un <span className='stylized'>developpeur Javascript </span>
               passionné et ouvert aux autres, je m’adapte facilement à un nouvel environnement et j’ai le sens des responsabilités.
            </h2>
            <div className='home-btn'>

                <a href={resume} className='btn'>
                  <h4> DOWLOAD CV</h4>
                </a>
                
                <Link className='btn' to='/contact'>
                  <h4> CONTACT ME</h4>
                </Link>
                
            </div>
        </div>
        
    </div>
  )
}

export default Home