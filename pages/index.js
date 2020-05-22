import About from '../components/About';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Tricking from '../components/Tricking';
import SideNav from '../components/SideNav';
import NavWrapper from '../components/NavWrapper';
import React, { useState, useRef, useEffect} from 'react';
import useDocumentScroll from '../hooks/useDocumentScroll';

const MIN_SCROLL_NAV = 25;
const MIN_SCROLL_TO_SHOW_WORK = 300;
const MIN_SCROLL_TO_SHOW_PROJ = 1000;
const MIN_SCROLL_TO_TRICKING = 2200;
const TIMEOUT_DELAY = 0;

const Home = () => {
  const [shouldShowSideNav, setShouldShowSideNav] = useState(false);
  const [shouldShowWork, setShouldShowWork] = useState(false);
  const [shouldShowProjects, setShouldShowProjects] = useState(false);
  const [shouldShowTricking, setShouldShowTricking] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const aboutRef = useRef(null); 
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const trickingRef = useRef(null);

  const handleNavClick = (section) => {
    setActiveSection(section);
    switch (section) {
      case 'about':
        scrollToRef(aboutRef, 500);
        break;
      case 'work':
        scrollToRef(workRef);
        break;
      case 'projects':
        scrollToRef(projectsRef);
        break;
      case 'tricking':
        scrollToRef(trickingRef);
        break;
      default:
        alert('whoa how did this happen?! please email me so I can bugfix :)');
    }
  }

  const scrollToRef = (ref, offset=0) => {
    window.scrollTo(0, ref.current.offsetTop - offset)
  };

  useEffect(() => {
    handleNavClick.bind(this);
  }, []);
  

  useDocumentScroll(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const scrolledForNav = currentScrollTop > MIN_SCROLL_NAV;
    const scrolledToWork = currentScrollTop > MIN_SCROLL_TO_SHOW_WORK;
    const scrolledToProjects = currentScrollTop > MIN_SCROLL_TO_SHOW_PROJ;
    const scrolledToTricking = currentScrollTop > MIN_SCROLL_TO_TRICKING;
    if (scrolledToWork && !scrolledToProjects) {
      setActiveSection('work');
    } else if (scrolledToProjects && !scrolledToTricking) {
      setActiveSection('projects');
    } else if (scrolledToTricking) {
      setActiveSection('tricking');
    } else {
      setActiveSection('about');
    }

    setTimeout(() => {
      // sets state only once
      setShouldShowSideNav(prev => prev ? prev : scrolledForNav);
      setShouldShowWork(prev => prev ? prev : scrolledToWork);
      setShouldShowProjects(prev => prev ? prev :scrolledToProjects);
      setShouldShowTricking(prev => prev ? prev : scrolledToTricking);
    }, TIMEOUT_DELAY);
  });

  return (
    <React.Fragment>
      <img src='/me.png' alt='picture of me (mikael mantis)'></img>
      <main>
        <NavWrapper display={shouldShowSideNav} section={activeSection} handleClick={handleNavClick}/>
        <div className='content'>
          <About refProp={aboutRef}/>
          <Work refProp={workRef} display={shouldShowWork}/>
          <Projects refProp={projectsRef} display={shouldShowProjects}/>
          <Tricking refProp={trickingRef} display={shouldShowTricking}/>
        </div>
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: row;
        }

        .content {
          padding-top: 2rem;
          margin: 0 auto;
          flex: 1;
          max-width: 650px;
        }
        
        //tablet or smaller screen sizes (600px)
        @media (max-width: 37.5em) {
          .content {
            max-width: 300px;
          }
        }

        @media (min-width: 120em) {
          .content {
            max-width: 800px;
          }
        }

        img {
          margin: 1rem 0;
        }
      `}</style>
    </React.Fragment>
  )
}
  

export default Home
