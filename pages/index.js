import Header from '../components/Header';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Calendar from '../components/Calendar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
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
