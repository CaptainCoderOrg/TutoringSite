import MenuBookIcon from '@mui/icons-material/MenuBook';

import styles from '../styles/components/Calendar.module.css';

export default function Calendar() {
  return (
    <div className={styles.container}>
      <p className={styles.book}>
        <MenuBookIcon fontSize="large" />
        <a
          className="url"
          href="https://jcollard.io/book"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a session
        </a>
      </p>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&mode=WEEK&src=am9zZXBobWNvbGxhcmRAZ21haWwuY29t&src=OGYyZzltbGR1djV2NzAxcnJucGxmZDluMzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bGlicDlqbTZhcjUzNmpvbTlydWV1ZWxhbW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26&color=%23AD1457&color=%233F51B5"
        style={{ border: 'solid 1px #777' }}
        height="600"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}
