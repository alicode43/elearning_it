import React, { createContext, useContext } from 'react';

// ...existing code...

const NotFoundContext = createContext(null);

const NotFoundPage = () => {
  const context = useContext(NotFoundContext);
  console.log(context);

  return (
    <div>
      <h1>Page Not Found</h1>
      {/* ...existing code... */}
    </div>
  );
};

export default NotFoundPage;
