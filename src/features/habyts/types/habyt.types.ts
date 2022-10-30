export const ENCOURAGE = 'encourage';
export const DISCOURAGE = 'discourage';

export const NONE = 'none';
export const SUM = 'sum';
export const AVG = 'avg';
export const MAX = 'max';
export const MIN = 'min';

export const DAY = 'day';
export const WEEK = 'week';
export const MONTH = 'month';
export const YEAR = 'year';

export type HabytType = typeof ENCOURAGE | typeof DISCOURAGE;

export type Calculation =
  | typeof NONE
  | typeof SUM
  | typeof AVG
  | typeof MAX
  | typeof MIN;
export type TimeLapse = typeof WEEK | typeof MONTH | typeof YEAR;
export type AVGBasis = typeof DAY | TimeLapse;

export interface Goal {
  target: number;
  calcType: Calculation;
  goalTimeLapse?: TimeLapse;
  goalTimeLapseSpan?: number;
  avgBasis?: AVGBasis;
}

export type MonthlyData = Record<string, number[]>;

export type HistoricalData = Record<string, MonthlyData>;

export type SerieItem = Array<string | number>;

export type TimePeriod = {
  name: string;
  periodSpan: number;
  type: 'RELATIVE' | 'FIXED' | 'CUSTOM';
};

export type HabytConfig = {
  timePeriod: TimePeriod;
  page: number;
};

export interface Habyt {
  id: string;
  name: string;
  type: HabytType;
  UoM: string;
  goal?: Goal;
  data: HistoricalData;
  creationDate: string;
  config: HabytConfig;
}
