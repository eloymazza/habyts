import {
  Calculations,
  HabytTypes,
  TimeLapses,
  TimePeriodNames,
  TimePeriodTypes,
} from '../enums/habytEnums';

export type GoalTimeLapse = Exclude<TimeLapses, TimeLapses.DAY>;
export type AVGBasis = TimeLapses;

export interface Goal {
  target: number;
  calcType: Calculations;
  goalTimeLapse?: GoalTimeLapse;
  goalTimeLapseSpan?: number;
  avgBasis?: AVGBasis;
}

export type MonthlyData = Record<string, number[]>;

export type HistoricalData = Record<string, MonthlyData>;

export type SerieItem = Array<string | number>;

export interface TimePeriod {
  name: TimePeriodNames;
  type: TimePeriodTypes;
  from: number;
  to: number;
  periodSpan: number;
}

export type HabytConfig = {
  timePeriod: TimePeriod;
  page: number;
};

export interface Habyt {
  id: string;
  name: string;
  type: HabytTypes;
  UoM: string;
  goal?: Goal;
  data: HistoricalData;
  creationDate: string;
  config: HabytConfig;
}
