import { VictoryChart } from 'victory';
import './App.css';
import CustomCharts from './CustomCharts';
import CustomTable from './CustomTable';
import mockarooData from './mockaroo-data';
import VictoryCharts from './VictoryCharts';

function App() {
  return (
    <div className="App">
      <CustomCharts data={mockarooData} />
      <CustomTable data={mockarooData} />
      <VictoryCharts data={mockarooData} />
    </div>
  );
}

export default App;
