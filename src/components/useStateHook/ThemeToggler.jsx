import { useState } from 'react';

// ICONS
import { FaRegMoon } from 'react-icons/fa';
import { MdOutlineWbSunny } from 'react-icons/md';

const ThemeToggler = () => {
  const [darkTheme, setDarkTheme] = useState(() => {
    return true;
  });

  // HANDLE THEME TOGGLE
  const handleThemeToggle = () => {
    setDarkTheme((previous) => !previous);
  };

  return (
    <div
      className={`${darkTheme ? `bg-slate-900 text-white` : `bg-white text-black`} h-screen w-full flex items-center justify-center`}
    >
      <button className="hover:cursor-pointer" onClick={handleThemeToggle}>
        {darkTheme ? (
          <MdOutlineWbSunny size={50} className="toggle" />
        ) : (
          <FaRegMoon size={40} className="toggle" />
        )}
      </button>
    </div>
  );
};
export default ThemeToggler; 
