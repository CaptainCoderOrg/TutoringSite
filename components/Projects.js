import WebIcon from '@mui/icons-material/Web';

import { projects } from '../util/projects';

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
      <h1 className="sectionTitle"><WebIcon />Student Projects</h1>
      <p>Check out the projects students have made</p>
      <div className={styles.projects}>
        {
          projects.map((project, i) =>
            <div className={styles.project} key={i}>
              <div className={styles.text}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
              <Link to={project.url}>
                <img
                  src={project.image}
                  width="300"
                  height="200"
                  alt={project.title}
                />
              </Link>
            </div>
          )
        }
      </div>
    </div>
  );
}
