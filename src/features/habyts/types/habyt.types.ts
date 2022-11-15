import {
  Calculations,
  HabytTypes,
  TimeLapses,
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
  name: string;
}

export type RelativeTimePeriod = TimePeriod & {
  type: TimePeriodTypes.RELATIVE;
  periodSpan: number;
};

export type FixedTimePeriod = TimePeriod & {
  type: TimePeriodTypes.FIXED;
};

export type CustomTimePeriod = TimePeriod & {
  type: TimePeriodTypes.CUSTOM;
  periodSpan: number;
};

export type TimePeriods =
  | FixedTimePeriod
  | RelativeTimePeriod
  | CustomTimePeriod;

export type HabytConfig = {
  timePeriod: TimePeriods;
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
