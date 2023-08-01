import { useState } from 'react';

export default function Accordion({ topics }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (i) => {
    if (activeIndex === i) {
      return setActiveIndex(null);
    }
    setActiveIndex(i);
  };

  return (
    <>
      {topics.map((topic) => (
        <li key={topic.id}>
          <div className="wrapper">
            <h1>{topic.name}</h1>
            <div className="hide-show" onClick={() => handleClick(topic.id)}>
              {activeIndex === topic.id ? '-' : '+'}
            </div>
          </div>
          <div className={activeIndex === topic.id ? '' : 'hidden'}>
            {topic.description}
          </div>
        </li>
      ))}
    </>
  );
}
