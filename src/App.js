import './App.css';
import CustomCharts from './CustomCharts';
import CustomTable from './CustomTable';
import mockarooData from './mockaroo-data';

function App() {
  return (
    <div className="App">
      <CustomCharts data={mockarooData} />
      <CustomTable data={mockarooData} />
    </div>
  );
}

export default App;
