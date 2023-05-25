import React  from 'react'
import './sideBar.css'
import {HiBars3BottomLeft} from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import {CiCircleList, CiUser, CiHome,  CiAt, CiMemoPad} from 'react-icons/ci'


function SideBar() {
 //   const [first, setFirst] = useState(false)
  return (
    <div className='sideBar'>
        <div className='sideBar-container'>
            
            <div className='bar' > {/* onClick={()=>setFirst(!first)} */}
                <HiBars3BottomLeft className='bar-icon'/>
            </div>
            
            <ul className= "navBar">  {/* {`${first ? ('navBar action') : ('navBar')}`} */}
                <li>
                    <Link to='/portfolio' className='navBar-List'>
                        <CiHome className='nav-icon'/>
                        <h6>Accueil</h6>
                    </Link>
                </li>
                <li>
                    <Link to='/about' className='navBar-List'>
                        <CiUser className='nav-icon'/>
                        <h6>A propos</h6>
                    </Link>
                </li>
                <li>
                    <Link to='/skills' className='navBar-List'>
                        <CiCircleList className='nav-icon'/>
                        <h6>aptitudes</h6>
                    </Link>
                </li>
                <li>
                    <Link to='/project' className='navBar-List'>
                        <CiMemoPad className='nav-icon'/>
                        <h6>Projets</h6>
                    </Link>
                </li>
                <li>  
                <Link to='/contact' className='navBar-List'>
                    <CiAt className='nav-icon'/>
                    <h6>Contact</h6>
                </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar