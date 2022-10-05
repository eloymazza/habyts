import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './drag.css';
import { Habyt } from './habyt.types';
import dataObj from './barChartExampleData';

export default ({ data }: { data: Habyt }) => {
  const { name, type, UoM } = data;

  return (
    <>
      <div>{name}</div>
      <div>{type}</div>
      <div>{UoM}</div>
      <div className="widget">
        <HighchartsReact
          highcharts={Highcharts}
          options={dataObj}
          allowChartUpdate
          containerProps={{ style: { height: '100%' } }}
        />
      </div>
    </>
  );
};
