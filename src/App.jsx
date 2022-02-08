import { useState, useEffect } from 'react'
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import RightHero from './components/Skills';
import Testimonial from './components/Testimonial';
import TimeLine from './components/TimeLine';
import { applyTheme } from './themes/themeutil';

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {

    applyTheme("creamRose")

    return () => {
    };
  }, []);


  return (
    <section className="bg-gradient-to-tr from-primary via-positive to-primary  ">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 shadow-2xl">
        <NavBar />
        <Hero />
        <TimeLine />
        <RightHero />
        <Projects />
        <Testimonial />
        <CallToAction />
        <Footer />
      </div>
    </section>
  )
}

export default App
