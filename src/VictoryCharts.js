import React from 'react';
import { VictoryBar, VictoryPolarAxis } from 'victory';
import { VictoryTheme } from 'victory';
import { VictoryPie } from 'victory';
import { VictoryChart } from 'victory';

export default function VictoryCharts({ data }) {
  const mungedData = data.map(item => ({
    x: item.first_name,
    y: item.car_model_year,
  })).slice(0, 25);

  return (
    <section className='charts'>
      <div>
        <VictoryChart polar
          domain={{ x: [0, 30] }}
          theme={VictoryTheme.material}
        > 
          <VictoryPolarAxis tickCount={8} />
          <VictoryBar
            data={mungedData}
            style={{ data: { fill: '#c3yc43', stroke: 'pink', strokeWidth: 3 } }}
          />
        </VictoryChart>
      </div>
    </section>
  );
}

// const mungedData = data.map(item => ({
//   x: item.first_name,
//   y: item.car_model_year,
// })).slice(0, 25);