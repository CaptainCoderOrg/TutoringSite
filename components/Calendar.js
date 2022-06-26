import MenuBookIcon from '@mui/icons-material/MenuBook';
import { InlineWidget } from "react-calendly";

import styles from '../styles/components/Calendar.module.css';

export default function Calendar() {
  return (
    <div className={styles.container}>
      <p className={styles.book}>
        <MenuBookIcon fontSize="large" />
        <a
          className="url"
          onClick={() => document.getElementsByClassName('calendly-badge-widget')[0].click()}
        >
          Book a session
        </a>
      </p>
      <InlineWidget url="https://calendly.com/d/dm2-845-v4s" />
    </div>
  );
}
