// // import React, { useState, useEffect, useRef } from "react";
// // import '../styles/home.css';

// // const PomodoroTimer = () => {
// //   const TIMER_TYPE_POMODORO = "POMODORO";
// //   const TIMER_TYPE_SHORT_BREAK = "SHORTBREAK";

// //   const pomodoroTimerInSeconds = 1500; // 25 minutes
// //   const shortBreakTimerInSeconds = 300; // 5 minutes

// //   const [timerType, setTimerType] = useState(TIMER_TYPE_POMODORO);
// //   const [timeLeft, setTimeLeft] = useState(pomodoroTimerInSeconds);
// //   const [isRunning, setIsRunning] = useState(false);

// //   const audioRef = useRef(new Audio("/assets/sounds/alarm.mp3"));
// //   const intervalRef = useRef(null);

// //   const startTimer = () => {
// //     if (!isRunning) {
// //       setIsRunning(true);
// //       intervalRef.current = setInterval(() => {
// //         setTimeLeft((prev) => {
// //           if (prev <= 1) {
// //             clearInterval(intervalRef.current);
// //             audioRef.current.play();
// //             return 0;
// //           }
// //           return prev - 1;
// //         });
// //       }, 1000);
// //     }
// //   };

// //   const stopTimer = () => {
// //     clearInterval(intervalRef.current);
// //     setIsRunning(false);
// //   };

// //   const resetTimer = () => {
// //     stopTimer();
// //     setTimeLeft(timerType === TIMER_TYPE_POMODORO ? pomodoroTimerInSeconds : shortBreakTimerInSeconds);
// //   };

// //   const switchTimerType = (type) => {
// //     if (timerType !== type) {
// //       setTimerType(type);
// //       resetTimer();
// //       if (type === TIMER_TYPE_POMODORO) {
// //         setTimeLeft(pomodoroTimerInSeconds);
// //       } else {
// //         setTimeLeft(shortBreakTimerInSeconds);
// //       }
// //     }
// //   };

// //   useEffect(() => {
// //     if (timeLeft === 0) {
// //       stopTimer();
// //       audioRef.current.play();
// //     }
// //     return () => clearInterval(intervalRef.current);
// //   }, [timeLeft]);

// //   return (
// //     <div className="pomodoro-timer">
// //       <div id="circularProgressBar">
// //         <div className="progress-value">{`${Math.floor(timeLeft / 60)
// //           .toString()
// //           .padStart(2, "0")}:${(timeLeft % 60).toString().padStart(2, "0")}`}</div>
// //       </div>
// //       <div className="timer-buttons">
// //         <button
// //           onClick={() => switchTimerType(TIMER_TYPE_POMODORO)}
// //           className={timerType === TIMER_TYPE_POMODORO ? "active" : ""}
// //         >
// //           Pomodoro
// //         </button>
// //         <button
// //           onClick={() => switchTimerType(TIMER_TYPE_SHORT_BREAK)}
// //           className={timerType === TIMER_TYPE_SHORT_BREAK ? "active" : ""}
// //         >
// //           Short Break
// //         </button>
// //       </div>
// //       <div className="control-buttons">
// //         <button onClick={startTimer} disabled={isRunning}>Start</button>
// //         <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
// //         <button onClick={resetTimer}>Reset</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PomodoroTimer;
// import React, { useState, useEffect, useRef } from "react";
// import '../styles/home.css';

// const PomodoroTimer = () => {
//   const TIMER_TYPE_POMODORO = "POMODORO";
//   const TIMER_TYPE_SHORT_BREAK = "SHORTBREAK";

//   const pomodoroTimerInSeconds = 1500; // 25 minutes
//   const shortBreakTimerInSeconds = 300; // 5 minutes

//   const [timerType, setTimerType] = useState(TIMER_TYPE_POMODORO);
//   const [timeLeft, setTimeLeft] = useState(pomodoroTimerInSeconds);
//   const [isRunning, setIsRunning] = useState(false);

//   const audioRef = useRef(new Audio("/assets/sounds/alarm.mp3"));
//   const intervalRef = useRef(null);

//   const startTimer = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//       intervalRef.current = setInterval(() => {
//         setTimeLeft((prev) => {
//           if (prev <= 1) {
//             clearInterval(intervalRef.current); // Stop the timer when it reaches 0
//             audioRef.current.play();
//             return 0;
//           }
//           return prev - 1; // Decrease by 1 second
//         });
//       }, 1000); // Update every second
//     }
//   };

//   const stopTimer = () => {
//     clearInterval(intervalRef.current);
//     setIsRunning(false);
//   };

//   const resetTimer = () => {
//     clearInterval(intervalRef.current); // Clear the existing interval
//     setIsRunning(false);
//     setTimeLeft(timerType === TIMER_TYPE_POMODORO ? pomodoroTimerInSeconds : shortBreakTimerInSeconds);
//   };

//   const switchTimerType = (type) => {
//     if (timerType !== type) {
//       setTimerType(type);
//       resetTimer();
//       if (type === TIMER_TYPE_POMODORO) {
//         setTimeLeft(pomodoroTimerInSeconds);
//       } else {
//         setTimeLeft(shortBreakTimerInSeconds);
//       }
//     }
//   };

//   useEffect(() => {
//     // Cleanup interval on component unmount or timeLeft reaches 0
//     if (timeLeft === 0) {
//       stopTimer();
//       audioRef.current.play();
//     }

//     // Cleanup interval on unmount
//     return () => clearInterval(intervalRef.current);
//   }, [timeLeft]);

//   return (
//     <div className="pomodoro-timer">
//       <div id="circularProgressBar">
//         <div className="progress-value">{`${Math.floor(timeLeft / 60)
//           .toString()
//           .padStart(2, "0")}:${(timeLeft % 60).toString().padStart(2, "0")}`}</div>
//       </div>
//       <div className="timer-buttons">
//         <button
//           onClick={() => switchTimerType(TIMER_TYPE_POMODORO)}
//           className={timerType === TIMER_TYPE_POMODORO ? "active" : ""}
//         >
//           Pomodoro
//         </button>
//         <button
//           onClick={() => switchTimerType(TIMER_TYPE_SHORT_BREAK)}
//           className={timerType === TIMER_TYPE_SHORT_BREAK ? "active" : ""}
//         >
//           Short Break
//         </button>
//       </div>
//       <div className="control-buttons">
//         <button onClick={startTimer} disabled={isRunning}>Start</button>
//         <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
//         <button onClick={resetTimer}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default PomodoroTimer;

//3
// import React, { useState, useEffect } from 'react';
// import '../styles/home.css';
// const PomodoroTimer = () => {
//   // State variables
//   const [timerValue, setTimerValue] = useState(1500); // Start with 25 minutes (1500 seconds)
//   const [pomodoroType, setPomodoroType] = useState('POMODORO');
//   const [isTimerRunning, setIsTimerRunning] = useState(false);

//   const pomodoroTimerInSeconds = 1500;
//   const shortBreakTimerInSeconds = 300;

//   const audio = new Audio('.mp3');

//   // Format seconds into MM:SS format
//   const formatNumberInStringMinute = (number) => {
//     const minutes = Math.trunc(number / 60).toString().padStart(2, '0');
//     const seconds = Math.trunc(number % 60).toString().padStart(2, '0');
//     return `${minutes}:${seconds}`;
//   };

//   // Update the circular progress bar
//   const setInfoCircularProgressBar = () => {
//     if (timerValue === 0) {
//       stopTimer();
//     }
//   };

//   // Start the timer
//   const startTimer = () => {
//     setIsTimerRunning(true);
//     audio.play();
//     const progressInterval = setInterval(() => {
//       setTimerValue((prevValue) => {
//         const newValue = prevValue - 1;
//         setInfoCircularProgressBar(newValue);
//         if (newValue <= 0) {
//           clearInterval(progressInterval);
//         }
//         return newValue;
//       });
//     }, 1000);

//     // Stop the audio after 2 seconds
//     setTimeout(stopAudio, 2000);
//   };

//   // Stop the timer
//   const stopTimer = () => {
//     setIsTimerRunning(false);
//   };

//   // Reset the timer
//   const resetTimer = () => {
//     setIsTimerRunning(false);
//     setTimerValue(pomodoroType === 'POMODORO' ? pomodoroTimerInSeconds : shortBreakTimerInSeconds);
//     stopAudio();
//   };

//   // Handle Pomodoro type (Pomodoro / Short Break)
//   const setPomodoroTypeHandler = (type) => {
//     setPomodoroType(type);
//     resetTimer();
//   };

//   // Stop audio
//   const stopAudio = () => {
//     audio.pause();
//     audio.currentTime = 0;
//   };

//   return (
    
//     <div style={{ height: '200px', width: '200px', position: 'static', marginTop: '60px' }}>
        
//       <div className="grid">
//         <div className="container">
//           <div className="card">
//             <div className="card-header">
//               <h1>POMODORO</h1>
//               <div className="card-header-buttons">
//                 <button
//                   id="buttonTypePomodoro"
//                   className={pomodoroType === 'POMODORO' ? 'active' : ''}
//                   onClick={() => setPomodoroTypeHandler('POMODORO')}
//                 >
//                   Pomodoro
//                 </button>
//                 <button
//                   id="buttonTypeShortBreak"
//                   className={pomodoroType === 'SHORTBREAK' ? 'active' : ''}
//                   onClick={() => setPomodoroTypeHandler('SHORTBREAK')}
//                 >
//                   Short Break
//                 </button>
//                 <div id="pomodoro_settings">
//                   <i className="bx bx-cog bx-sm"></i>
//                 </div>
//               </div>
//             </div>
//             <div className="card-body">
//               <div id="circularProgressBar" className="progress-bar">
//                 <div className="progress-bar-inner">
//                   <h2 className="progress-value">{formatNumberInStringMinute(timerValue)}</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="card-footer">
//               <button
//                 className="btn-success"
//                 onClick={startTimer}
//                 disabled={isTimerRunning}
//               >
//                 Start
//               </button>
//               <button
//                 className="btn-danger"
//                 onClick={stopTimer}
//                 disabled={!isTimerRunning}
//               >
//                 Stop
//               </button>
//               <button onClick={resetTimer}>Reset</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PomodoroTimer;
import React, { useState, useEffect, useRef } from "react";
import '../styles/home.css';

const PomodoroTimer = () => {
  const TIMER_TYPE_POMODORO = "POMODORO";
  const TIMER_TYPE_SHORT_BREAK = "SHORTBREAK";

  const pomodoroTimerInSeconds = 1500; // 25 minutes
  const shortBreakTimerInSeconds = 300; // 5 minutes

  const [timerType, setTimerType] = useState(TIMER_TYPE_POMODORO);
  const [timeLeft, setTimeLeft] = useState(pomodoroTimerInSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const audioRef = useRef(new Audio("/assets/sounds/alarm.mp3"));
  const intervalRef = useRef(null);
  const circularProgressBarRef = useRef(null);
  const circularProgressBarNumberRef = useRef(null);

  const multiplierFactor = 360 / pomodoroTimerInSeconds;

  // Format seconds into MM:SS format
  const formatNumberInStringMinute = (number) => {
    const minutes = Math.trunc(number / 60).toString().padStart(2, '0');
    const seconds = Math.trunc(number % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // Update the circular progress bar
  const setInfoCircularProgressBar = () => {
    if (circularProgressBarRef.current && circularProgressBarNumberRef.current) {
      circularProgressBarNumberRef.current.textContent = formatNumberInStringMinute(timeLeft);
      circularProgressBarRef.current.style.background = `conic-gradient(var(--blue) ${timeLeft * multiplierFactor}deg, var(--purple) 0deg)`;
    }
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current); // Stop the timer when it reaches 0
            audioRef.current.play();
            setInfoCircularProgressBar();
            return 0;
          }
          return prev - 1; // Decrease by 1 second
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current); // Clear the existing interval
    setIsRunning(false);
    setTimeLeft(timerType === TIMER_TYPE_POMODORO ? pomodoroTimerInSeconds : shortBreakTimerInSeconds);
    setInfoCircularProgressBar();
  };

  const switchTimerType = (type) => {
    if (timerType !== type) {
      setTimerType(type);
      resetTimer();
      if (type === TIMER_TYPE_POMODORO) {
        setTimeLeft(pomodoroTimerInSeconds);
      } else {
        setTimeLeft(shortBreakTimerInSeconds);
      }
    }
  };

  // Cleanup the interval and audio when component is unmounted
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

//   useEffect(() => {
//     // Update circular progress bar when timeLeft changes
//     setInfoCircularProgressBar();

//     // Stop the audio after 6 seconds
//     if (timeLeft === 0) {
//       setTimeout(() => {
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       }, 6000);
//     }
//   }, [timeLeft]);
useEffect(() => {
    // Update circular progress bar when timeLeft changes
    setInfoCircularProgressBar();
  
    // Stop the audio after 6 seconds
    if (timeLeft === 0) {
      setTimeout(() => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }, 6000);
    }
  }, [timeLeft]); // Dependency array with timeLeft
  
  return (
    <div className="pomodoro-timer">
      <div ref={circularProgressBarRef} id="circularProgressBar" className="progress-bar">
        <div ref={circularProgressBarNumberRef} className="progress-value">
          {formatNumberInStringMinute(timeLeft)}
        </div>
      </div>

      <div className="timer-buttons">
        <button
          onClick={() => switchTimerType(TIMER_TYPE_POMODORO)}
          className={timerType === TIMER_TYPE_POMODORO ? "active" : ""}
        >
          Pomodoro
        </button>
        <button
          onClick={() => switchTimerType(TIMER_TYPE_SHORT_BREAK)}
          className={timerType === TIMER_TYPE_SHORT_BREAK ? "active" : ""}
        >
          Short Break
        </button>
      </div>

      <div className="control-buttons">
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
