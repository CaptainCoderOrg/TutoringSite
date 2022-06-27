import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useState } from 'react';

import styles from '../styles/components/Header.module.css';

export default function Header(props) {
  const { scrollTo } = props;

  const [menuAnchor, setMenuAnchor] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.bannerWrap} onClick={() => scrollTo('welcome')}>
        <Image
          src="/img/banner.svg" width="358" height="48" alt="banner"
        />
      </div>
      <span className="flexfill" />
      <div className={styles.buttons}>
        <button onClick={() => scrollTo('welcome')}>Welcome</button>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('testimonials')}>Testimonials</button>
        <button onClick={() => scrollTo('projects')}>Student Projects</button>
        <button onClick={() => scrollTo('calendar')}>Calendar</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </div>
      <div className={styles.menu}>
        <IconButton onClick={e => setMenuAnchor(e.currentTarget)}>
          {
            menuAnchor ?
            <MenuOpenIcon /> :
            <MenuIcon />
          }
        </IconButton>
        <Menu
          anchorEl={menuAnchor}
          open={!!menuAnchor}
          onClose={() => setMenuAnchor(null)}
        >
          <MenuItem onClick={() => {
            scrollTo('welcome');
          }}>
            <span className={styles.menuItem}>Welcome</span>
          </MenuItem>
          <MenuItem onClick={() => {
            scrollTo('about');
          }}>
            <span className={styles.menuItem}>About</span>
          </MenuItem>
          <MenuItem onClick={() => {
            scrollTo('testimonials');
          }}>
            <span className={styles.menuItem}>Testimonials</span>
          </MenuItem>
          <MenuItem onClick={() => {
            scrollTo('projects');
          }}>
            <span className={styles.menuItem}>Student Projects</span>
          </MenuItem>
          <MenuItem onClick={() => {
            scrollTo('calendar');
          }}>
            <span className={styles.menuItem}>Calendar</span>
          </MenuItem>
          <MenuItem onClick={() => {
            scrollTo('contact');
          }}>
            <span className={styles.menuItem}>Contact</span>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
