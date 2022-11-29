export enum TimePeriodTypes {
  FIXED = 'FIXED',
  RELATIVE = 'RELATIVE',
  CUSTOM = 'CUSTOM',
}

export enum HabytTypes {
  ENCOURAGE = 'encourage',
  DISCOURAGE = 'discourage',
}

export enum Calculations {
  NONE = 'none',
  SUM = 'sum',
  AVG = 'avg',
  MAX = 'max',
  MIN = 'min',
}

export enum TimeLapses {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

export enum UOMs {
  KGS = 'kgs',
}

export enum PageActions {
  PREV = -1,
  NEXT = 1,
}

export enum TimePeriodNames {
  DAYS = 'Days',
  WEEKS = 'Weeks',
  MONTHS = 'Months',
  CURRENT_MONTH = 'Current Month',
}

export const DEFAULT_PERIOD_SPAN = 14;
export const WEEKS_PERIOD_SPAN = 28;
