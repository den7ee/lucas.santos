import { Footer } from './components/Footer';
import { Header } from './components/Header';
import HeroSection from './components/HeroSection';
import { Projects } from './components/Projects';
import SkillSection from './components/SkillSection';
import './styles/tailwind.css'

function App() {
return (
    <div>
      <Header/>
      <HeroSection/>
      <SkillSection/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App
