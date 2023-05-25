import React from 'react'
import './introducte.css'
import { FaFacebook, FaLinkedin, FaGit } from 'react-icons/fa'
import myPicture from './Ident.png'

const Introducte = () => {
   // <img src={myPicture} width="200px" height="200px" alt="myPicture"/>
    return (
    <div className='introducte'>
        <div className='introducte-container'>
            <div style={{height:"60%"}}></div>
            
           <div className='introducte-content'>
          
            <h1>RAMANAMAHEFA Nandrianina Nathanael</h1>
            <ul className='network'>
                <li>
                    <a href="%PUBLIC_URL%/https://www.facebook.com/nathanael.ramanamahefa" target='_blank' rel="noreferrer">
                        <FaFacebook className='network-icon'/>
                    </a>
                </li>
               
                <li>
                    <a href='%PUBLIC_URL%/https://github.com/Nath-Nandrianina' target='_blank' rel="noreferrer">
                        <FaGit className='network-icon'/>
                    </a>
                </li>
                <li>
                    <a href='%PUBLIC_URL%/https://www.linkedin.com/in/nathanael-ramanamahefa-0a2149255/' target='_blank' rel="noreferrer">
                        <FaLinkedin className='network-icon'/>
                    </a>
                </li>
            </ul>
            <img src={myPicture} className='me' alt="me" />
           </div>
            
        </div>
    </div>
  )
}

export default Introducte