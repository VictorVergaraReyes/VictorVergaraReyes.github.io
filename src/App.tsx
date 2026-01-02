import './App.css'
// import Navbar from './components/header'
// import HeroSection from './components/Herosection'
import ResumeSection from './sections/resume-section'
import ProjectsSection from './sections/projects'
import ContactSection from './sections/contact'
// import BackgroundEffects from './components/BackgroundEffects'
import MarqueeFooter from './components/marquee-footer'
import ExampleLayout from './sections/Examplelayout'
import { DarkModeProvider } from './context/DarkModeContext'

function App() {
  return (
    <DarkModeProvider>
      <ExampleLayout />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
      <MarqueeFooter />
    </DarkModeProvider>
  )
}

export default App
