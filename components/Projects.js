import Image from 'next/image';
import WebIcon from '@mui/icons-material/Web';

import styles from '../styles/components/Projects.module.css';

export default function Projects() {
  function Link(props) {
    const { to } = props;

    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }

  return (
    <div className={styles.container}>
      <h1><WebIcon />Student Projects</h1>
      <p>Check out the projects students have made</p>
      <div className={styles.projects}>
        <Link to="https://example.com/">
          <Image src="/img/placeholder/1.jpeg" width="300" height="200" alt="placeholder" />
        </Link>
        <Link to="https://example.com/">
          <Image src="/img/placeholder/2.jpeg" width="300" height="200" alt="placeholder" />
        </Link>
        <Link to="https://example.com/">
          <Image src="/img/placeholder/3.jpeg" width="300" height="200" alt="placeholder" />
        </Link>
        <Link to="https://example.com/">
          <Image src="/img/placeholder/4.jpeg" width="300" height="200" alt="placeholder" />
        </Link>
        <Link to="https://example.com/">
          <Image src="/img/placeholder/5.jpeg" width="300" height="200" alt="placeholder" />
        </Link>
        <Link to="https://example.com/">
          <Image src="/img/placeholder/6.jpeg" width="300" height="200" alt="placeholder" />
        </Link>
      </div>
    </div>
  );
}
