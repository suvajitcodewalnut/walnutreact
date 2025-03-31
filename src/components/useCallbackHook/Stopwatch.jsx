import { useState, useEffect, useCallback } from 'react';

// TOASTER
import { Toaster, toast } from 'react-hot-toast';

// ICONS
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { MdOutlineRestartAlt } from 'react-icons/md';

const Stopwatch = () => {
  // STATES
  const [time, setTime] = useState(() => {
    return 0;
  });
  const [isRunning, setIsRunning] = useState(() => {
    return false;
  });

  // FORMAT
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const milliseconds = Math.floor((timeInSeconds % 1) * 100);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  const checkAndNotify = useCallback((currentTime) => {
    if (currentTime > 0 && currentTime % 60 === 0) {
      toast(`10 MINUTES MILESTONE`, {
        icon: '🕑',
        style: {
          borderRadius: '10px',
        },
      });
    }
  }, []);

  // EFFECTS
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((previousTime) => {
          const newTime = previousTime + 0.01;
          checkAndNotify(newTime);
          return newTime;
        });
      }, 10);
    }
    // CLEANUP
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, checkAndNotify]);

  // HANDLER FUNCTION FOR START OR STOP
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  // HANDLER FUNCTION TO RESET
  const handleWatchReset = () => {
    setIsRunning(false);
    setTime(0);
    toast('STOPWATCH RESET', {
      icon: '🔄',
      style: {
        borderRadius: '10px',
      },
    });
  };

  return (
    <div className="h-screen w-full bg-slate-900 text-white">
      <div className=" min-h-screen w-full flex flex-col items-center justify-center gap-7">
        <div className="text-7xl md:text-8xl lg:text-9xl tracking-wider">{formatTime(time)}</div>
        <div className="flex items-center justify-center gap-5">
          <button onClick={handleStartStop}>
            {isRunning ? (
              <FaPause size={40} className="button" />
            ) : (
              <FaPlay size={40} className="button" />
            )}
          </button>
          <button onClick={handleWatchReset}>
            <MdOutlineRestartAlt size={40} className="button" />
          </button>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};
export default Stopwatch;
