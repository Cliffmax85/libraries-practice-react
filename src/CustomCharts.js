import React from 'react';
import { VictoryPie } from 'victory';

export default function CustomCharts({ data }) {
  const mungedData = data.map(item => ({
    x: item.first_name,
    y: item.favorite_color,
  })).slice(0, 8);
  return (
    <section className='charts'>
      <div className='chart-block'>
        <VictoryPie data={mungedData} />
      </div>
    </section>
  );
}
