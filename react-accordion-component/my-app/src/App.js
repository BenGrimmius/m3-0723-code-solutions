import './App.css';
import Accordion from './Accordion';

let gods = [
  {
    id: 1,
    name: 'Thanatos',
    description:
      'In Greek mythology, Thanatos was the personification of death. He was a minor figure in Greek mythology, often referred to but rarely appearing in person. His name is transliterated in Latin as Thanatus, but his counterpart in Roman mythology is Mors or Letum',
  },
  {
    id: 2,
    name: 'Hades',
    description:
      'Hades, in the ancient Greek religion and mythology, is the god of the dead and the king of the underworld, with which his name became synonymous. Hades was the eldest son of Cronus and Rhea, although this also made him the last son to be regurgitated by his father.',
  },
  {
    id: 3,
    name: 'Anubis',
    description:
      'Anubis, also known as Inpu, Inpw, Jnpw, or Anpu in Ancient Egyptian is the god of funerary rites, protector of graves, and guide to the underworld, in ancient Egyptian religion, usually depicted as a canine or a man with a canine head.',
  },
  {
    id: 4,
    name: 'Shiva',
    description:
      'Shiva, also known as Mahadeva, is one of the principal deities of Hinduism. He is the Supreme Being in Shaivism, one of the major traditions within Hinduism. Shiva is known as The Destroyer within the Trimurti, the Hindu trinity which also includes Brahma and Vishnu.',
  },
];

function App() {
  return (
    <div className="App">
      <ul>
        <Accordion topics={gods} />
      </ul>
    </div>
  );
}

export default App;
