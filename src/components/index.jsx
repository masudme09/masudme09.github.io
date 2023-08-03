import { useState } from 'react';
import SocialMenu from './SocialMenu';
import NavBar from './Navbar';
import HeroSection from './HeroSection';
import About from './About';
import '../App.css'
import Projects from './Projects';
import ExperienceSection from './ExperienceSection';

function Index() {
  const [activeButton, setActiveButton] = useState('ABOUT');
  return (
    <>
      <div className="flex flex-col justify-center bg-primary-dark lg:flex-row  ">
        <div className="lg:w-1/4 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24
         bg-primary-dark dark:bg-primary-light">
          <NavBar
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
          <HeroSection />
          <div className="mt-auto">
            <SocialMenu />
          </div>
        </div>
        <div className="lg:w-2/4 pt-24 lg:px-24 lg:py-24 bg-primary-dark  dark:bg-primary-light">
          <div className="border-l px-5 border-gray-400">
            <main id="content" className="flex flex-col items-start justify-start h-full">
              <About setActiveButton={setActiveButton} />
              <ExperienceSection setActiveButton={setActiveButton} />
              <Projects setActiveButton={setActiveButton} />
            </main>
          </div>
        </div>

      </div>
    </>
  )
}

export default Index
