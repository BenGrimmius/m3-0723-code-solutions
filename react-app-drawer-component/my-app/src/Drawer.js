import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Drawer({ menuHeading, items }) {
  let [view, setView] = useState(false);

  function handleClick() {
    setView(!view);
  }

  function handleBgClick() {
    if (view !== true) {
      handleClick();
    }
  }

  let bg = view ? 'bg' : 'bg shade';
  const dStatus = view ? 'drawer closed' : 'drawer open';

  let shade = view ? 'list' : 'list-titles list-shade';

  let List = items.map((item) => (
    <li key={item.id}>
      <p className={shade}>{item.title}</p>
    </li>
  ));

  return (
    <>
      <div className={dStatus}>
        <div className="menu">
          <h1>{menuHeading}</h1>
          <FaBars
            size={50}
            onClick={handleClick}
            style={{ position: 'relative', right: 10 }}
          />
        </div>
        <div>
          <ul onClick={handleClick}>{List}</ul>
        </div>
      </div>
      <div className={bg} onClick={handleBgClick} />
    </>
  );
}
