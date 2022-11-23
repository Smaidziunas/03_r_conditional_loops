
import Condition from './components/Condition';
import './App.css';
import Icon from './components/UI/icon/Icon';
import ArrayOfElements from './components/ArrayOfElements';
import Navigation from './components/nav/Navigation';

import ArrayOfShowCards from './components/showCards/ArrayOfShowCards';

// DATA IMPORTS
import {navData} from './assets/data.js';
import {showCards} from './assets/showCards.js';

const colors = [
  { id: 1, value: 'red' }, // Obj
  { id: 2, value: 'green' },
  { id: 3, value: 'blue' },
  { id: 4, value: 'yellow' },
];

function App() {
  console.log(navData);
  return (
    <div className='App'>
      {/* NAVIGATION */}
      <Navigation data={navData} />


      <main className="container">
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
        {/* TOUR SHOWS CARDS */}
        <ArrayOfShowCards showCardsData={showCards} />
      </main>
    </div>
  );
}

export default App;