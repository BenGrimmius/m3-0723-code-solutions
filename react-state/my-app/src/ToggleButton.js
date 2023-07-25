import { useState } from 'react';

function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('Value returned by useState', isClicked);

  const handleClick = () => {
    console.log('Value before calling the setter', isClicked);
    setIsClicked(!isClicked);
    console.log('Value after calling the setter', isClicked);
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={{ backgroundColor: !isClicked ? 'white' : color }}>
        {text}
      </button>
    </>
  );
}

export default ToggleButton;
