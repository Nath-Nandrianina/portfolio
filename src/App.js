import './App.css';
import SideBar from './components/sideBar/SideBar';
import Introducte from './components/introducte/Introducte';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import SingleProject from './pages/singleProject/SingleProject';
import Skills from './pages/skills/Skills';
import Overlay from './components/overlay/Overlay';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
          <SideBar/>
          <Introducte/>
          
          <Routes>
            <Route path='/project/:id/:myData' exact Component={Overlay} />

            <Route path='/portfolio' exact Component={Home}/>
            <Route path='/about' exact Component={About}/>
            <Route path='/project' exact Component={Projects}/>
            <Route path='/project/:id' exact Component={SingleProject}/>
            <Route path='skills' exact Component={Skills} />          
            <Route path='/contact' exact Component={Contact} />  
            <Route path='*'  element={ <Navigate to="/portfolio" replace/>}/>     
          </Routes> 
      </div>
    </div>
  );
}

export default App;
