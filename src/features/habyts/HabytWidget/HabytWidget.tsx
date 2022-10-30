import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './drag.css';
import { Habyt, HabytConfig, HistoricalData } from '../types/habyt.types';
import {
  getDayNamesForPeriod,
  getDataFromPeriod,
  getNextXDate,
} from '../../../utils/dateUtils';

export type TimePeriod = {
  name: string;
  periodSpan: number;
  type: 'RELATIVE' | 'FIXED' | 'CUSTOM';
};

export type Props = {
  habyt: Habyt;
};

const DEFAULT_DATA = [0, 0, 0, 0, 0, 0, 0];

export type ChartData = {
  categories: string[];
  periodData: number[];
};

const getRelativePeriodWidgetData = (
  periodSpan: number,
  data: HistoricalData,
  page: number
) => {
  const dateModificator = page * periodSpan;

  const date = getNextXDate(new Date(), dateModificator);

  return {
    categories: getDayNamesForPeriod(date, periodSpan),
    periodData: getDataFromPeriod(date, data, periodSpan),
  };
};

const getWidgetData = (
  data: HistoricalData,
  { timePeriod, page }: HabytConfig
): ChartData => {
  const { periodSpan, type } = timePeriod;
  switch (type) {
    case 'RELATIVE':
      return getRelativePeriodWidgetData(periodSpan, data, page);
    default:
      return { categories: [''], periodData: [1] };
  }
};

export default ({ habyt }: Props) => {
  const { name, type, UoM, data, config } = habyt;
  const { categories, periodData } = getWidgetData(data, config);
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
      softMin: 0,
      softMax: 10,
    },
    xAxis: {
      categories,
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
      },
    },
    series: [
      {
        data: periodData || DEFAULT_DATA,
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
          containerProps={{ style: { height: '100%', width: '100%' } }}
        />
      </div>
    </>
  );
};
