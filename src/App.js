import './App.css';
import Image from './Assest/Components/Image-Section/image'
import Contact from './Assest/Components/Contact-Section/contact'
import Education from './Assest/Components/Education-Section/education'
import Skills from './Assest/Components/Skills-Section/skills'
import Bio from './Assest/Components/Developer-Bio/bio'
import Work from './Assest/Components/Experince-Section/experince'
import SkillsProg from './Assest/Components/Skills-Section/skill-2'
import Interest from './Assest/Components/interest-section/interest'


function App() {
  return (
   <div className="main-div">
  
    <div className="inner-div-1">
    <Image/>
    <Contact/>
    <Education/>
    <Skills/>
    </div>
  
   <div className="inner-div-2">
     <Bio/>
     <Work/>
     <SkillsProg/>
     <Interest/>
   </div>

</div>
  );
}

export default App;
