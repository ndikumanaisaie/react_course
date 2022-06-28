/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('name');
  return (
    <div className="first-div">
      <p>Your name is { name }</p>
      <button onClick={ () => setName('Ndikumana Isaie')}>
        display name
      </button>
    </div>
  );
};

export default App;