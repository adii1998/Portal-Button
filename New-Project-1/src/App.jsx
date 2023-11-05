import React, { useState } from 'react';
import './App.css';

function App() {
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

  const handleStarClick = () => {
    setDimensions((prevDimensions) => ({
      width: prevDimensions.width + 2,
      height: prevDimensions.height + 2,
    }));
  };

  return (
    <div className="App">
      <img
        src="star.png" 
        alt="Star"
        width={dimensions.width}
        height={dimensions.height}
        onClick={handleStarClick}
      />
    </div>
  );
}

export default App;
