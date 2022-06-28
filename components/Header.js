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
        <img src="/img/banner.svg" alt="banner" />
      </div>
      <span className="flexfill" />
      <div className={styles.buttons}>
        <button onClick={() => scrollTo('about')}>The Captain</button>
        <button onClick={() => scrollTo('testimonials')}>Testimonials</button>
        <button onClick={() => scrollTo('projects')}>Student Projects</button>
        <button onClick={() => scrollTo('calendar')}>Book a Lesson</button>
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
            scrollTo('about');
          }}>
            <span className={styles.menuItem}>The Captain</span>
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
            <span className={styles.menuItem}>Book a Lesson</span>
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
