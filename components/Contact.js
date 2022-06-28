import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';

import { useState } from 'react';

import styles from '../styles/components/Contact.module.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function inputColor(color) {
    return {
      '& label.Mui-focused': { color: color },
      '& .MuiInput-underline:after': { borderBottomColor: color },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': { borderColor: color },
      }
    };
  }

  return (
    <div className={styles.container}>
      <h1 className="sectionTitle"><EmailIcon />Contact</h1>
      <form onSubmit={e => {
        e.preventDefault();
        window.alert(JSON.stringify({ name, email, message }));
      }}>
        <TextField
          sx={{
            marginBottom: '16px',
            ...inputColor('#2196f3')
          }}
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="off" spellCheck="false"
          fullWidth required
        />
        <TextField
          sx={{
            marginBottom: '16px',
            ...inputColor('#2196f3')
          }}
          type="email"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="off" spellCheck="false"
          fullWidth required
        />
        <TextField
          sx={{
            marginBottom: '16px',
            ...inputColor('#2196f3')
          }}
          label="Message"
          placeholder="Add your message here..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          autoComplete="off" spellCheck="false"
          fullWidth required
          multiline rows={4}
        />
        <button className="blueButton">
          Submit Message
        </button>
      </form>
    </div>
  );
}
