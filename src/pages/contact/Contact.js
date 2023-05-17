import React, {useState, useRef} from 'react'
import './contact.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import {BsTelephone} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {GoMail} from 'react-icons/go'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const data = {
        user_name : "",
        subject: "",
        user_email:"",
        message:""
    }

    console.log(`${process.env.REACT_APP_TEMPLATE_ID} `);
    
    const form = useRef();
    const [error, setError] =  useState(false);
    const [success, setSuccess] = useState(false);
    const [inputData, setInputData]= useState(data);

    const makeChange = e =>{
        setInputData({...inputData ,[e.target.name] : e.target.value})
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
       emailjs.sendForm(`${process.env.REACT_APP_EMAIL_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, 
        form.current, `${process.env.REACT_APP_PUBLIC_ID}`)
          .then((result) => {
            console.log(result);
              setSuccess(true);

              setTimeout(()=>{
                setSuccess(false);
               
              }, 1500)

          }, (error) => {  
            setError(true);
            setTimeout(()=>{
                setError(false);
               
              }, 1500)

          }); 
      };
    
      const {user_name, subject, message, user_email} = inputData
    
      const stateBtn = user_name === '' ||
                       user_email === '' ||
                         subject === '' || 
                         message === '' ? 
                         ( 
                            
                         <button disabled type='submit' className='btn btn-disabled'>
                            <h4> Valider</h4>
                        </button>
                            
                        ) 
                        :
                         (  
                         <button type='submit' className='btn'>
                        <h4> Valider</h4>
                        </button>
                    );

     
  return (
    <div className='contact'>
        <div className='contact-container'>
            
        <img src={require('../../common/fond-contact.png') } width="100%" height="200px" alt="img" />
            
        <div className='contact-content'>
            
        <form ref={form} onSubmit={sendEmail}>
            <div className='contact-left'>
               
                <div className='contact-left-first'>
                    <input type='text' placeholder='Nom' name='user_name' value={user_name} onChange={makeChange} autoComplete='none'/>
                    <input type='email' placeholder='Email' name='user_email' value={user_email} required onChange={makeChange} />
                </div>
              
                    <input type="text" placeholder='objet' name='subject' value={subject} onChange={makeChange}/>
               
                    <textarea placeholder='votre text ici...' name='message' value={message} onChange={makeChange} required/>
                   
                   <div className='btn-position'>

                    {stateBtn}
                 
                    {
                    error && (
                        <div className='alertInfo failed'>
                        <h3 style={{color:"red"}}>imposible d'envoyer l'email</h3>
                        </div>
                    ) 
                   }

                  {
                  success && (
                        <div className='alertInfo success'>
                        <h3 style={{color:"green"}}>email envoye</h3>
                        </div>
                    ) 
                }
                </div>
                  
            </div>
        </form>
        
            <div className='contact-right'>
                <div className='contact-info'>
                    <div className='adjust-icon'>
                        <BsTelephone className='icon' />
                    </div>
                    
                    <p>+261 34 46 901 69</p>
                </div>
                <div className='contact-info'>
                    <div className='adjust-icon'>
                        <GoMail className='icon' />
                    </div>
                    
                    <p>nath.ramanamahefa@gmail.com</p>
                </div>
                <div className='contact-info'>
                    <div className='adjust-icon'>
                        <MdLocationOn className='icon' />
                    </div>
                    
                    <p>II B9 Ampandrana Ouest</p>
                </div>
            </div>
           
        </div>
       

        </div>
    </div>
  )
}

export default Contact