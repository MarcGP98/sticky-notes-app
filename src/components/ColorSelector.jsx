import { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';

function ColorSelector() {
  const { color, setColor } = useContext(ColorContext);

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h2>Selecciona un color</h2>
      <input type="color" value={color} onChange={handleChange} />
    </div>
  );
}

export default ColorSelector;