import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './drag.css';
import { Habyt } from '../types/habyt.types';

export type Props = {
  habyt: Habyt;
};

export default ({ habyt }: Props) => {
  const { name, type, UoM, data, creationDate } = habyt;
  const widgetConfig = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Correr',
    },
    yAxis: {
      title: {
        text: 'Kms',
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        day: '%e %a',
        min: creationDate,
      },
    },
    series: [
      {
        data: [...data],
      },
    ],
  };

  return (
    <>
      <div>{name}</div>
      <div>{type}</div>
      <div>{UoM}</div>
      <div className="widget">
        <HighchartsReact
          highcharts={Highcharts}
          options={widgetConfig}
          allowChartUpdate
          containerProps={{ style: { height: '100%' } }}
        />
      </div>
    </>
  );
};
