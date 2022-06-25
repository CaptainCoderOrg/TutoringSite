import { useState } from 'react';

import styles from '../styles/components/Contact.module.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <form onSubmit={() => {}}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button>
          Submit Message
        </button>
      </form>
    </div>
  );
}
