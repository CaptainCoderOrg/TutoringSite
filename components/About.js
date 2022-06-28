import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VideocamIcon from '@mui/icons-material/Videocam';

import styles from '../styles/components/About.module.css';

export default function About(props) {
  const { scrollTo } = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.profileWrapper}>
            <img src="/img/profile.png" width="192" height="192" alt="profile" />
          </div>
          <div className={styles.bullets}>
            <p><SchoolIcon />University of New Mexico Computer Science</p>
            <p><SchoolIcon />University of Massachusetts Graduate Coursework</p>
            <p><LocationOnIcon />In Person - Tucson, AZ</p>
            <p><VideocamIcon />Remote - Zoom and Google Hangouts</p>
            <div className={styles.iconButton}>
              <LinkIcon />
              <a
                className="url"
                href="https://is.gd/iYZfiH"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wyzant Tutoring Profile
              </a>
            </div>
            <button className="blueButton" onClick={() => scrollTo('calendar')}>
              Book now!
            </button>
          </div>
        </div>
        <div className="flexfill" />
        <div className={styles.bio}>
          <h1 className="sectionTitle"><PersonIcon />Meet Captain Coder</h1>
          <p>I am a passionate educator, software engineer, and researcher who has been teaching Computer Science courses in University and 6th - 12th grade for over 10 years. Not only do I have a background in education but I also have over 15 years of experience working in industry for several startups, large companies, and even serving as a CTO for 4 years.</p>
          <p>As an expert in dozens of programming languages and technologies, I am comfortable tutoring popular industry languages such as C, C++, Java, Python, JavaScript as well as obscure languages such as Haskell, Elm, Erlang, and Fortran. I also have experience working with Devops platforms including Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure. Along with Devops comes a plethora of other technologies like Docker, Kubernutes, and other containerization tools.</p>
          <p>Whether you&apos;re a young student who wants to learn to develop video games, a high schooler looking to ace an AP exam, or hobbyist who needs a little extra help to get over the hump, I am happy to help develop a custom tutoring experience to suit your needs.</p>
          <p>When you&apos;re ready to grow as a programmer, do not hesitate to contact me to get started.</p>
        </div>
      </div>
    </div>
  );
}
