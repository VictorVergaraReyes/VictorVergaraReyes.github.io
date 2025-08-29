import './App.css'
import Navbar from './components/header'
import HeroSection from './components/hero'
import ResumeSection from './sections/resume-section'
import ProjectsSection from './sections/projects'
import ContactSection from './sections/contact'

function App() {
  

  return (
    <>
      <Navbar />
      <HeroSection />      
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default App
