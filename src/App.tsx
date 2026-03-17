import Philosophy from "./sections/Philosophy";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Documents from "./sections/Documents";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Layout from './components/ui/Layout'
import Hero from './sections/Hero'
import { useEffect } from 'react'

function App() {
  
  useEffect(() => {
    // Developer Easter Egg requested in blueprint
    console.log("%cLooking under the hood? I respect the curiosity. Let's talk security: aby@example.com", "color: #10B981; font-weight: bold; font-size: 14px;");
  }, [])

  return (
    <Layout>
      <Hero />
      <Philosophy />
      <Projects />
      <Experience />
      <Documents />
      <Skills />
      <Certificates />
      <Contact />
    </Layout>
  )
}

export default App
