
import React, { useState } from 'react';
import CircleCount from './CircleCount';
import Button from './Button';


function App() {
  const [circles, setCircles] = useState([]);
  const [colorChanges, setColorChanges] = useState(0);

  const addCircle = () => {
    setCircles([...circles, { id: circles.length + 1, grey: false }]);
  };

  const toggleColor = (id) => {
    setCircles(circles.map(circle => {
      if (circle.id === id) {
        setColorChanges(prevCount => circle.grey ? prevCount - 1 : prevCount + 1);
        return { ...circle, grey: !circle.grey };
      }
      return circle;
    }));
  };

  return (
    <div>
      <h1>Circle Count App</h1>
      <Button onClick={addCircle} />
      <span>Color changes: {colorChanges}</span>
      {circles.map(circle => (
        <CircleCount key={circle.id} grey={circle.grey} onClick={() => toggleColor(circle.id)} />
      ))}
    </div>
  );
}

export default App;
