import Header from '../components/Header';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Calendar from '../components/Calendar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { useRef } from 'react';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  const testimonialsRef = useRef();
  const calendarRef = useRef();
  const contactRef = useRef();

  function scrollTo(section) {
    if (section === 'about') window.scrollTo(0, 0);
    else if (section === 'testimonials') testimonialsRef.current.scrollIntoView();
    else if (section === 'calendar') calendarRef.current.scrollIntoView();
    else if (section === 'contact') contactRef.current.scrollIntoView();
  }

  return (
    <div className={styles.container}>
      <Header scrollTo={scrollTo} />
      <About scrollTo={scrollTo} />
      <span className={styles.bookmark} ref={testimonialsRef} />
      <Testimonials />
      <span className={styles.bookmark} ref={calendarRef} />
      <Calendar />
      <span className={styles.bookmark} ref={contactRef} />
      <Contact />
      <Footer />
    </div>
  );
}
