import { useState, useEffect, useRef } from "react";

function Timer() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let Ref = useRef();

  const startTimer = () => {
    const currentDate = new Date("april 31, 2022 00:00:00").getTime();

    Ref.current = setInterval(() => {
      const now = new Date().getTime();
      const gap = currentDate - now;

      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);
      if (gap < 0) {
        // stop the timer
        clearInterval(Ref.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(Ref.current);
    };
  }, []);

  return (
    <section className="timer__container">
      <div className="timer__display">
        <div className="timer">
          <span className="line"></span>
          <p>{days < 10 ? `0${days}` : days}</p>
          <div className="left-semicircle"></div>
          <div className="right-semicircle"></div>
        </div>
        <div className="bottom-text">
          <p>days</p>
        </div>
      </div>
      <div className="timer__display">
        <div className="timer">
          <span className="line"></span>
          <p>{hours < 10 ? `0${hours}` : hours}</p>
          <div className="left-semicircle"></div>
          <div className="right-semicircle"></div>
        </div>
        <div className="bottom-text">
          <p>hours</p>
        </div>
      </div>
      <div className="timer__display">
        <div className="timer">
          <span className="line"></span>
          <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
          <div className="left-semicircle"></div>
          <div className="right-semicircle"></div>
        </div>
        <div className="bottom-text">
          <p>minutes</p>
        </div>
      </div>
      <div className="timer__display">
        <div className="timer">
          <span className="line"></span>
          <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
          <div className="left-semicircle"></div>
          <div className="right-semicircle"></div>
        </div>
        <div className="bottom-text">
          <p>seconds</p>
        </div>
      </div>
    </section>
  );
}
export default Timer;
