import './App.css';
import Card from './components/Card';

const arr = [
  {
    img: '#',
    title: 'Card title',
    desc: 'Some Quick example text to build on the card title and make up the bulk of the cards content.',
    textBtn: 'Go somewhere',
  },
  {
    title: 'Special title treatment',
    desc: 'With supporting text below as a natural lead-in to additional content.',
    textBtn: 'Go somewhere',
  }
]

function App() {
  return (
    <Card children={ arr } ></Card>
  );
}

export default App;
