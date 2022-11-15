import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './drag.css';
import { Habyt, HabytConfig, HistoricalData } from '../types/habyt.types';
import {
  getDayNamesForPeriod,
  getDataFromPeriod,
  getDateWithModificator,
} from '../../../utils/dateUtils';

export type Props = {
  habyt: Habyt;
};

// const DEFAULT_DATA = [0, 0, 0, 0, 0, 0, 0];

export type ChartData = {
  categories: string[];
  periodData: {
    data: number[];
    name: string;
  };
};

const getRelativePeriodWidgetData = (
  periodSpan: number,
  data: HistoricalData,
  page: number
) => {
  const dateModificator = periodSpan * page;

  const date = getDateWithModificator(new Date(), dateModificator);

  return {
    categories: getDayNamesForPeriod(date, periodSpan),
    periodData: getDataFromPeriod(date, data, periodSpan),
  };
};

const getWidgetData = (
  data: HistoricalData,
  { timePeriod, page }: HabytConfig
): ChartData => {
  switch (timePeriod.type) {
    case 'RELATIVE':
      return getRelativePeriodWidgetData(timePeriod.periodSpan, data, page);
    default:
      return { categories: [''], periodData: { data: [1], name: 'default' } };
  }
};

export default ({ habyt }: Props) => {
  const { name, type, UoM, data, config } = habyt;
  const { categories, periodData } = getWidgetData(data, config);
  const { data: serieData, name: serieName } = periodData;
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
        data: serieData,
        name: serieName,
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
