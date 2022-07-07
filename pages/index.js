import Header from '../components/Header';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
// import Projects from '../components/Projects';
import Calendar from '../components/Calendar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { useRef } from 'react';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  const aboutRef = useRef();
  const testimonialsRef = useRef();
  // const projectsRef = useRef();
  const calendarRef = useRef();
  const contactRef = useRef();

  function scrollTo(section) {
    if (section === 'welcome') window.scrollTo(0, 0);
    else if (section === 'about') aboutRef.current.scrollIntoView();
    else if (section === 'testimonials') testimonialsRef.current.scrollIntoView();
    // else if (section === 'projects') projectsRef.current.scrollIntoView();
    else if (section === 'calendar') calendarRef.current.scrollIntoView();
    else if (section === 'contact') contactRef.current.scrollIntoView();
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => scrollTo('calendar')}
        className={`blueButton ${styles.book}`}
      >
        Schedule a Lesson
      </button>
      <Header scrollTo={scrollTo} />
      <Welcome scrollTo={scrollTo} />
      <span className={styles.bookmark} ref={aboutRef} />
      <About scrollTo={scrollTo} />
      <span className={styles.bookmark} ref={testimonialsRef} />
      <Testimonials />
      {/* <span className={styles.bookmark} ref={projectsRef} />
      <Projects /> */}
      <span className={styles.bookmark} ref={calendarRef} />
      <Calendar />
      <span className={styles.bookmark} ref={contactRef} />
      <Contact />
      <Footer />
    </div>
  );
}
