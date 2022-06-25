import Image from 'next/image';

import styles from '../styles/components/Header.module.css';

export default function Header() {
  return (
    <div>
    <div className={styles.container}>
      <div className={styles.bannerWrap}>
        <Image
          src="/img/banner.svg" width="280" height="80" alt="banner"
          className={styles.banner}
        />
      </div>
    </div>
  );
}
