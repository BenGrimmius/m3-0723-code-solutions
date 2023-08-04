import './App.css';
import Container from './Components';

const BulbasaurPic = '/Images/001.png';
const CharmanderPic = '/Images/004.png';
const SquirtlePic = '/Images/007.png';
const PikaPic = '/Images/025.png';
const JigglypuffPic = '/Images/039.png';

const PokemonList = [
  { id: '001', name: 'Bulbasaur', src: BulbasaurPic, alt: 'Bulbasaur Picture' },
  {
    id: '004',
    name: 'Charmander',
    src: CharmanderPic,
    alt: 'Charmander Picture',
  },
  { id: '007', name: 'Squirtle', src: SquirtlePic, alt: 'Charmander Picture' },
  { id: '025', name: 'Pikachu', src: PikaPic, alt: 'Charmander Picture' },
  {
    id: '039',
    name: 'JigglyPuff',
    src: JigglypuffPic,
    alt: 'Charmander Picture',
  },
];

function App() {
  return (
    <>
      <Container items={PokemonList} />
    </>
  );
}

export default App;
