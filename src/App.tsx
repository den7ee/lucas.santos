import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import HeroSection from './components/HeroSection';
import { Projects } from './components/Projects';
import SkillSection from './components/SkillSection';
import './styles/tailwind.css'

function App() {
return (
  <div>
    <div className='px-2'>
      <Header/>
      <HeroSection/>
      <SkillSection/>
      <Projects/>
      <BackToTop />
      
    </div>
    <Footer/>
  </div>
  );
}

export default App
