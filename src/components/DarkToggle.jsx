import React, { useEffect, useState } from 'react';

export default function DarkToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme','dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme','light');
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="px-3 py-1 border rounded-lg flex items-center gap-2">
      {dark ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}
