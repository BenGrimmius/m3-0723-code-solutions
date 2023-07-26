import { useState } from 'react';

export default function HotButton() {
  const [heat, setHeat] = useState(0);

  const handleClick = () => {
    setHeat(heat + 1);
  };

  let bgColor = '';
  if (heat < 3) {
    bgColor = 'black';
  } else if (heat > 2 && heat < 6) {
    bgColor = '#351C74';
  } else if (heat > 5 && heat < 9) {
    bgColor = '#674EA7';
  } else if (heat > 8 && heat < 12) {
    bgColor = '#E06666';
  } else if (heat > 11 && heat < 15) {
    bgColor = '#F6B26A';
  } else if (heat > 14 && heat < 18) {
    bgColor = 'yellow';
  } else {
    bgColor = 'white';
  }
  return (
    <>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: bgColor,
          color: heat <= 5 ? 'white' : 'black',
          fontSize: 40,
        }}>
        Hot Button
      </button>
      <p style={{ fontSize: 20 }}>{heat} Clicks</p>
    </>
  );
}
