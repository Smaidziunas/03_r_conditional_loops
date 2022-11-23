
import Condition from './components/Condition';
import './App.css';
import Icon from './components/UI/icon/Icon';
import ArrayOfElements from './components/ArrayOfElements';

const colors = [
  { id: 1, value: 'red' }, // cObj
  { id: 2, value: 'green' },
  { id: 3, value: 'blue' },
  { id: 4, value: 'yellow' },
];

function App() {
  return (
    <div className='App container'>
      <h1>App</h1>
      {/* <Condition /> */}
      <Icon dark color='dark'>
        thermometer-quarter
      </Icon>
      <Icon dark>thermometer-half</Icon>
      <Icon dark size='lg'>
        thermometer-full
      </Icon>
      {/* <Icon /> */}
      <ArrayOfElements data= {colors} />
    </div>
  );
}

export default App;