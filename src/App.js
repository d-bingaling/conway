import logo from './logo.svg';
import './App.css';
import {NameAge} from './NameAge';
import {FaveSeries} from './FaveSeries';
import {ClickyButton} from './ClickyButton';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <p>
          Dan's the bomb.
        </p>
        <NameAge name="Andrew" age="37"/>
        <NameAge name="Dan" age="26"/>
        <FaveSeries name="Parks and Recreation" amount="2" streaming_service="NowTV"/>
        <ClickyButton/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default App;
