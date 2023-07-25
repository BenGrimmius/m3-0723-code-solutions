import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton text="Button 1" color="green" />
      <ToggleButton text="Button 2" color="red" />
      <ToggleButton text="Button 3" color="skyBlue" />
    </div>
  );
}

export default App;
