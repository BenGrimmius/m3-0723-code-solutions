import { useState } from 'react';

export default function ToggleSwitch() {
  let [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className={`path ${toggle ? 'on' : 'off'}`}>
        <div className="switch" onClick={handleClick} />
      </div>
      <p>{toggle ? 'on' : 'off'}</p>
    </>
  );
}
