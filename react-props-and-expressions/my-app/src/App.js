import { CustomButton, CustomButtonClasses } from './CustomButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomButton text={'I'} color="red" />
      <CustomButton text={'know'} color="green" />
      <CustomButton text={'React with style!'} color="skyBlue" />
      <br />

      <CustomButtonClasses text={'I'} className="red" />
      <CustomButtonClasses text={'know'} className="green" />
      <CustomButtonClasses text={'React with classes!'} className="blue" />
    </div>
  );
}

export default App;
