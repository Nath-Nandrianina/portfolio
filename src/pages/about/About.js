import React from 'react'
import '../index.css'
import TitleHeading from '../../common/title/TitleHeading'
import './about.css'
import {FaBaseballBall, FaMusic, FaFilm, FaRoad, FaDotCircle} from 'react-icons/fa'

const About = () => {
  return (
    <div className='about'>
        <div className='about-container'>
            <TitleHeading>
                About
            </TitleHeading>
            <div className='about-first'>
                <div className='first-left'>
                    <p>
                        HI! I am RAMANAMAHEFA Nandrianina Nandrianina, developper front with React and Back with NodeJs.
                        From Madagascar in Tananarivo the capital. I have rich experience during me cursus from Superior Institute Polytechnique of Madagascar
                         (ISPM) and with multiple project.
                    </p>
                </div>
                <div className='first-right'>
                    
                        <div className='right-content'>
                            <h5> Age </h5>
                            <p> 24</p>        
                        </div>

                        <div className='right-content'>
                            <h5> Residence </h5>
                            <p> Antananarivo/Mscar</p>        
                        </div>
                        <div className='right-content'>
                            <h5> Address </h5>
                            <p> Ampandrana Ouest</p>        
                        </div>
                        <div className='right-content'>
                            <h5> Phone number </h5>
                            <p> +261 34 46 901 69</p>        
                        </div>
                        
                </div>
            </div>
            
            <TitleHeading>
                    Formations & Diplomes
            </TitleHeading>
            <div className='about-second'>

            <div className='second-content'>
                    <h3> Fin de parcours en Master 2</h3>
                    <div className='content-details'>
                        <h4>Institut Superieur Poytechnique de Madagascar <br/>
                            <span className='info'>filiere Informatique de Gestion Genie Logiciel et Inteligence Artificielle</span>
                        </h4>
                        <span className='date'>| 2021 - 2023</span>
                    </div>        
                </div>    

                <div className='second-content'>
                    <h3>  Diplome de licence</h3>
                    <div className='content-details'>
                        <h4>Institut Superieur Poytechnique de Madagascar <br/>
                        <span className='info'>  filiere Informatique de Gestion Genie Logiciel et Inteligence Artificielle </span>
                        </h4>
                        <span className='date'>| 2017 - 2020</span>
                    </div>        
                </div>    

                <div className='second-content'>
                    <h3>  Formations GNU/Linux</h3>
                    <div className='content-details'>
                    <span className='info'> 
                            Sys BootCamp 
                        </span>
                        <span className='date'>| 2018</span>
                    </div>
                                        
                </div>    

                <div className='second-content'>
                    <h3>  Diplome de Baccalaureat</h3>
                    <div className='content-details'>
                    <h4> Lycee Jacques RABEMANANJARA Toamasina <br/>  
                        <span className='info'>     
                            serie Scientifique D 
                        </span></h4>
                        <span className='date'>| 2012 - 2016</span>
                    </div>
                </div>    
            </div>

            <div className='about-third'>
                
                    <TitleHeading>
                        Caracters
                    </TitleHeading>
                    
                    <div className='third-content'>
                        <div className='content'>
                            <div className='adjust'>
                                <FaDotCircle className='third-icon'/> 
                                <h6>serieux</h6>
                            </div>
                            <div className='adjust'>
                                <FaDotCircle className='third-icon'/> 
                                <h6>bonne capacite d'adaptation</h6>
                            </div>

                        </div>
                        <div className='content'>
                            <div className='adjust'>    
                                <FaDotCircle className='third-icon'/>
                                <h6>responsable</h6>
                            </div>
                            <div className='adjust'>
                                <FaDotCircle className='third-icon'/>   
                                <h6>respectieux</h6>
                            </div>
                        </div>
                      
                    </div>
                </div>


                <div className='hobby'>
                    <TitleHeading>
                        Loisirs
                    </TitleHeading>

                    <div className='third-content'>

                        <div className='content'>
                            <FaFilm className='hobby-icon'/>
                            <FaMusic className='hobby-icon'/>
                        </div>
                        <div className='content'>
                            <FaBaseballBall className='hobby-icon'/>
                            <FaRoad className='hobby-icon'/>
                        </div>
                        <div className='content'>
                            <FaBaseballBall className='hobby-icon'/>
                            <FaRoad className='hobby-icon'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
  )
}

export default About