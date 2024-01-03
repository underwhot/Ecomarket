import { useState } from 'react';
import styles from './SubscribeForm.module.scss';

export const SubscribeForm = () => {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => handleInput(e)}
        className={styles.input}
        type="email"
        placeholder="Your email address"
        required
      />
      <button type="submit" className={styles.button}>
        Subscribe
      </button>
    </form>
  );
};
