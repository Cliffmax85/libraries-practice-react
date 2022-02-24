import React from 'react';
import { VictoryBar, VictoryPolarAxis } from 'victory';
import { VictoryTheme } from 'victory';
import { VictoryChart } from 'victory';
import { avgCarYear } from './data-utils';

export default function VictoryCharts() {

  return (
    <section className='charts'>
      <div>
        <VictoryChart polar
          domain={{ x: [0, 30] }}
          theme={VictoryTheme.material}
        > 
          <VictoryPolarAxis tickCount={8} />
          <VictoryBar
            data={avgCarYear}
            style={{ data: { fill: '#c3yc43', stroke: 'pink', strokeWidth: 3 } }}
          />
        </VictoryChart>
      </div>
    </section>

  );
}

