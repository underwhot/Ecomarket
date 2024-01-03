import { useEffect, useState } from 'react';
import styles from './CountdownTimer.module.scss';

export const CountdownTimer = ({ deadline }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(deadline) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      if (
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        setExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className={styles.timer}>
      <div className={styles.column}>
        <div className={styles.number}>{addLeadingZero(timeLeft.days)}</div>
        <div className={styles.text}>days</div>
      </div>
      <div className={styles.dots}>:</div>
      <div className={styles.column}>
        <div className={styles.number}>{addLeadingZero(timeLeft.hours)}</div>
        <div className={styles.text}>hours</div>
      </div>
      <div className={styles.dots}>:</div>
      <div className={styles.column}>
        <div className={styles.number}>{addLeadingZero(timeLeft.minutes)}</div>
        <div className={styles.text}>mins</div>
      </div>
      <div className={styles.dots}>:</div>
      <div className={styles.column}>
        <div className={styles.number}>{addLeadingZero(timeLeft.seconds)}</div>
        <div className={styles.text}>secs</div>
      </div>
    </div>
  );
};
