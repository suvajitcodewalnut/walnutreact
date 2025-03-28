import { useState, useEffect } from 'react';

// ICONS
import { MdDesktopWindows } from 'react-icons/md';
import { FaTablet } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';

const WindowSize = () => {
  // STATES
  const [windowSize, setWindowSize] = useState(() => {
    return window.innerWidth;
  });
  // HANDLER
  const handleWindowSize = () => {
    return setWindowSize(window.innerWidth);
  };

  // EFFECTS
  useEffect(() => {
    window.addEventListener('resize', handleWindowSize);
    // CLEANUP
    return () => window.removeEventListener('resize', handleWindowSize);
  }, []);
  // RENDER
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-900">
      <div>
        {windowSize >= 500 && windowSize <= 750 ? (
          <FaTablet size={60} className="text-white" />
        ) : windowSize < 500 ? (
          <FaMobile size={60} className="text-white" />
        ) : (
          <MdDesktopWindows size={60} className="text-white" />
        )}
      </div>
      <div className="text-white text-sm"> {windowSize} </div>
    </div>
  );
};
export default WindowSize;
