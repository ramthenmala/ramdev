import React from 'react';

const NavWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="border-gray-200 pt-10 pb-16 rounded">
      <div className="flex flex-wrap justify-between items-center ">
        {children}
      </div>
    </nav>
  );
};

export default NavWrapper;
