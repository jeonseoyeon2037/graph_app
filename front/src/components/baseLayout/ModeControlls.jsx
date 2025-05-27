import React, { useState, useEffect } from 'react'
import { Icons } from '../../assets/icons'

const ModeControlls = () => {
  const [darkMode, setDarkMode] = useState(true);
  const rootElement = document.documentElement;

  useEffect(() => {
    darkMode 
      ? rootElement.classList.add('dark')
      : rootElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      <img src={darkMode ? Icons.SunFill : Icons.MoonFill} alt=""
      className="w-5 h-5 invert-[1]" />
    </button>
  )
}

export default ModeControlls
