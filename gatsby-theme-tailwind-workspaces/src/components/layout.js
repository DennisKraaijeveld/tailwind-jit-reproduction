import React from 'react';

import { Link } from 'gatsby';

const Layout = ({ children }) => {
  return (
    <div className="bg-red-800">
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
