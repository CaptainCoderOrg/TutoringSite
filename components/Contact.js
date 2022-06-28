import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

import { useState } from 'react';

import styles from '../styles/components/Contact.module.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

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
      {
        sent ?
        <p className={styles.sent}>
          Message Sent
          <MarkEmailReadIcon />
        </p> :
        <form
          onSubmit={() => setTimeout(() => setSent(true), 0)}
          action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSelrGPUpqklI2s7qSgSiI0JPCQz4JBWfu1A088FviYnefdaxg/formResponse"
          method="POST"
          target="_blank"
          role="form"
          id="contact-submit-form"
        >
          <TextField
            sx={{
              marginBottom: '16px',
              ...inputColor('#2196f3')
            }}
            label="Name"
            value={name}
            name="entry.1252177023"
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
            name="entry.1788540634"
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
            name="entry.1337362381"
            onChange={e => setMessage(e.target.value)}
            autoComplete="off" spellCheck="false"
            fullWidth required
            multiline rows={4}
          />
          <button className="blueButton">
            Submit Message
          </button>
        </form>
      }
    </div>
  );
}
