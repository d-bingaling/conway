import logo from './logo.svg';
import './App.css';
import {FaveSeries} from './FaveSeries';
import {ClickyButton} from './ClickyButton';
import {EmployeeData, useEmployeeData} from './EmployeeData';
import {handleGetEmployeeData} from './EmployeeData';

function App() {

  const employeeState = useEmployeeData(); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <p>
          Dan's the bomb.
        </p>
        <FaveSeries name="Parks and Recreation" amount="2" streaming_service="NowTV"/>
        <ClickyButton initCount={0} name="Dan Bingaling"/>
        <ClickyButton initCount={10} />
        <ClickyButton initCount={100} />
        <EmployeeData {...employeeState}/>
      </body>
    </div>
  );
}

export default App;
