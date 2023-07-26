import './App.css';
import Drawer from './Drawer';

const gameList = [
  { id: 1, title: 'Stardew Valley' },
  { id: 2, title: 'The Legend of Zelda' },
  { id: 3, title: 'God of War' },
  { id: 4, title: 'Fallout' },
];

function App() {
  return (
    <div className="App">
      <Drawer menuHeading="Games" items={gameList} />
    </div>
  );
}

export default App;
