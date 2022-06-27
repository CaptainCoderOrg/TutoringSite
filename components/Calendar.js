import MenuBookIcon from '@mui/icons-material/MenuBook';
import { InlineWidget } from "react-calendly";

import styles from '../styles/components/Calendar.module.css';

export default function Calendar() {
  return (
    <div className={styles.container}>
      <p className={styles.book}>
        <a
          className="url"
          onClick={() => document.getElementsByClassName('calendly-badge-widget')[0].click()}
        >
          <MenuBookIcon fontSize="large" />
          Book a session
        </a>
      </p>
      <div className={styles.widgetSmall}>
        <InlineWidget styles={{ height: '800px' }} url="https://calendly.com/d/dm2-845-v4s" />
      </div>
      <div className={styles.widgetMedium}>
        <InlineWidget styles={{ height: '1000px' }} url="https://calendly.com/d/dm2-845-v4s" />
      </div>
      <div className={styles.widgetBig}>
        <InlineWidget styles={{ height: '650px' }} url="https://calendly.com/d/dm2-845-v4s" />
      </div>
    </div>
  );
}
