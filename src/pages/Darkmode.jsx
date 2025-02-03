import React, { useState } from 'react'; // Assuming you have a CSS file for styles

const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'bg-dark' : 'bg-white'}>
      <div className="flex justify-start items-start">
        <button onClick={toggleTheme} style={{ color: isDarkMode ? 'white' : 'black' }}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Darkmode;