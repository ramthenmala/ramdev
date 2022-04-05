import NextNProgress from 'nextjs-progressbar';
import { useTheme } from 'next-themes';

import { useEffect, useState } from 'react';
import React from 'react';

const PageLoader = () => {
  const { theme } = useTheme();
  const [uiTheme, uiThemeSet] = useState<string>();
  useEffect(() => {
    const getTheme = localStorage.getItem('theme');
    let setTheme = getTheme === 'light' ? '#000' : 'white';
    uiThemeSet(setTheme);
  }, [theme]);
  return (
    <NextNProgress
      color={uiTheme}
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
  );
};

export default PageLoader;
