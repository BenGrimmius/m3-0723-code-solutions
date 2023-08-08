import React from 'react';
import { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((current + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrent((current - 1 + items.length) % items.length);
  };

  const handleIndClick = (i) => {
    setCurrent(i);
  };

  let currentTitle = items[current];

  return (
    <div>
      <div>{currentTitle}</div>
      <div>
        <CustomButton text="Prev" onClick={() => handlePrev()} />
        <Indicators
          count={items.length}
          onSelect={handleIndClick}
          current={current}
        />
        <CustomButton text="Next" onClick={() => handleNext()} />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ text, color = 'white', onClick }) {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, onSelect, current }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        text={i}
        onClick={() => onSelect(i)}
        color={i === current ? 'skyBlue' : 'white'}
      />
    );
  }
  return <div>{buttons}</div>;
}
