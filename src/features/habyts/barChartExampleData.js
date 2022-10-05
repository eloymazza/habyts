export default {
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
    },
  },
  series: [
    {
      data: [
        [Date.UTC(2022, 0, 5), 3],
        [Date.UTC(2022, 0, 6), 2],
        [Date.UTC(2022, 0, 7), 1],
        [Date.UTC(2022, 0, 8), 0],
        [Date.UTC(2022, 0, 9), 0],
        [Date.UTC(2022, 0, 10), 0],
      ],
    },
  ],
};
