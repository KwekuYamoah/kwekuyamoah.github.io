import { useState, useLayoutEffect, useRef, useEffect } from 'react'
import gsap from "gsap";
import Navbar from "@/screens/navbar";
import About from '@/screens/about';
import Project from '@/screens/projects';
import Footer from '@/screens/footer';
import Research from '@/screens/research';
import Skill from '@/screens/skills';


function App() {
  // Main App
  const [selectedPage, setSelectedPage] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage("about")
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const comp =  useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.5,
        delay: 0.3,
      })

        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })

    }, comp)

    return () => context.revert()
  }, [])

  return (
    <div className="relative app bg-canvas theme-surface" ref={comp}>
          <div 
            id='intro-slider'
            className='overflow-y-hidden h-screen p-10 font-medium font-satoshi text-black bg-white fixed z-50 w-full flex flex-col gap-20 md:gap-10 tracking-tight'>
            <h1 className='text-4xl md:text-9xl' id="title-1">Language Researcher</h1>
            <h1 className='text-4xl md:text-9xl' id="title-2">Consultant</h1>
            <h1 className='text-4xl md:text-9xl' id="title-3">Thinker</h1>
          </div>

      
      <div id="welcome">
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <About setSelectedPage={setSelectedPage}/>
        <Project setSelectedPage={setSelectedPage}/>
        <Research setSelectedPage={setSelectedPage}/>
        <Skill setSelectedPage={setSelectedPage}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
