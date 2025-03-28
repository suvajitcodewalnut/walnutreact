import { useState } from 'react';

// ICONS
import { FaChevronUp } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';
import { RiResetLeftLine } from 'react-icons/ri';

const Counter = () => {
  const [counter, setCounter] = useState(() => {
    return 0;
  });

  // HANDLE INCREMENT
  const handleIncrement = () => {
    setCounter((previous) => previous + 1);
  };

  // HANDLE DECREMENT
  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter((previous) => previous - 1);
    }
  };

  // HANDLE RESET
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="h-screen w-full bg-slate-950 flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-8xl mb-8">COUNTER</h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-blue-500">{counter}</h2>
      </div>
      <div className="flex items-center justify-center mt-50 gap-4">
        <button className="text-white" onClick={handleIncrement}>
          <FaChevronUp size={40} className="button" />
        </button>
        <button className="text-white" onClick={handleDecrement}>
          <FaChevronDown size={40} className="button" />
        </button>
        <button className="text-white" onClick={handleReset}>
          <RiResetLeftLine size={40} className="button" />
        </button>
      </div>
    </div>
  );
};
export default Counter;
