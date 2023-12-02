import './App.css';
import Header from './templates/Header';
import ResultsTable from "./templates/ResultsTable";
import TopDiv from "./templates/TopDiv";
import ClearButton from './templates/ClearButton';

function App() {
  return (
      <div>
        <Header />
        <TopDiv />
        <div id="results-div">
          <ResultsTable />
          <ClearButton />
        </div>
      </div>
  );
}

export default App;