import { useState, useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';

export default function Container({ items }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current, items.length]);

  const HandleChevLeft = () => {
    setCurrent((current - 1 + items.length) % items.length);
  };

  const HandleChevRight = () => {
    setCurrent((current + 1) % items.length);
  };

  const handleIndicators = (i) => {
    setCurrent(i);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row just-se">
          <h1>{items[current].name}</h1>
        </div>
        <div className="row just-se">
          <LeftChev onSelect={HandleChevLeft} />
          <PokemonIcon src={items[current].src} alt={items[current].alt} />
          <RightChev onSelect={HandleChevRight} />
        </div>
        <div className="row just-c">
          <Indicators
            count={items.length}
            current={current}
            onSelect={handleIndicators}
          />
        </div>
      </div>
    </div>
  );
}

function LeftChev({ onSelect }) {
  return (
    <div className="chev">
      <FaChevronLeft onClick={onSelect} />
    </div>
  );
}

function RightChev({ onSelect }) {
  return (
    <div className="chev">
      <FaChevronRight onClick={onSelect} />
    </div>
  );
}

function PokemonIcon({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
}

function Indicators({ count, onSelect, current }) {
  const indicators = [];
  for (let i = 0; i < count; i++) {
    indicators.push(
      current === i ? (
        <FaCircle className="indicator" onClick={() => onSelect(i)} key={i} />
      ) : (
        <FaRegCircle
          className="indicator"
          onClick={() => onSelect(i)}
          key={i}
        />
      )
    );
  }
  return <div>{indicators}</div>;
}
