import './App.css';
import CustomButton from './CustomButton';

function App() {
  const handleCustomClick = (text) => {
    alert(text);
  };

  return (
    <div className="App">
      <CustomButton
        color="red"
        text="First Button!"
        onCustomClick={() => handleCustomClick('Red button was clicked!')}
      />
      <CustomButton
        color="green"
        text="Second Button!"
        onCustomClick={() => handleCustomClick('Green button was clicked!')}
      />
      <CustomButton
        color="skyBlue"
        text="Third Button!"
        onCustomClick={() => handleCustomClick('Blue button was clicked!')}
      />
    </div>
  );
}

export default App;
