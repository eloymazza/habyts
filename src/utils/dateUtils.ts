import { HistoricalData } from '../features/habyts/types/habyt.types';

const getDayName = (day: Date, locale?: string) =>
  day.toLocaleString(locale || navigator.language, {
    weekday: 'short',
  });

const getPastMonday = (date: Date) => {
  const currentDay = date.getDay();
  const pastMonday = date.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
  return new Date(date.setDate(pastMonday));
};

const getNextDay = (date: Date) => new Date(date.setDate(date.getDate() + 1));
const getCurrentYear = (date: Date) => date.getFullYear();
const getCurrentMonth = (date: Date) => date.getMonth();

export const getCurrentYearMonth = (date: Date) => [
  getCurrentYear(date).toString(),
  (getCurrentMonth(date) + 1).toString(),
];

const getRemainingDaysData = (
  currentMonthData: number[],
  remainingDays: number
) =>
  currentMonthData
    ? currentMonthData.slice(0, remainingDays)
    : Array.from({ length: remainingDays }, () => 0);

export const getDataFromPeriod = (
  date: Date,
  data: HistoricalData,
  periodSpan: number
) => {
  const [year, month] = getCurrentYearMonth(date);
  let currentYear = +year;
  let currentMonth = +month;
  const startDay = date.getDate();

  const monthData = data?.[currentYear]?.[currentMonth];

  if (!monthData) return Array.from({ length: periodSpan }, () => 0);

  let periodData: number[] = [];
  const fixedStartDay = startDay - 1;

  if (startDay + periodSpan > monthData.length) {
    periodData = monthData.slice(fixedStartDay);
    currentMonth += 1;
    if (currentMonth > 12) {
      currentYear += 1;
    }
    const remainingDays = periodSpan - periodData.length;
    const currentMonthData = data?.[currentYear]?.[currentMonth];

    periodData.push(...getRemainingDaysData(currentMonthData, remainingDays));
  } else {
    periodData.push(
      ...monthData.slice(fixedStartDay, fixedStartDay + periodSpan)
    );
  }

  return periodData;
};

export const getCurrentMonthsDays = (year: number, month: number) =>
  new Date(year, month, 0).getDate();

export const getDayNamesForPeriod = (
  startDate: Date,
  days: number,
  locale?: string
) => {
  let currentDay = new Date(startDate);

  const dayNames = [];
  for (let i = 0; i < days; i += 1) {
    const dayName = getDayName(currentDay, locale);
    const dayNumber = currentDay.getDate();
    dayNames.push(`${dayName} ${dayNumber}`);
    currentDay = getNextDay(currentDay);
  }
  return dayNames;
};

export const getValidHTMLDateInputFormat = (date: number) => {
  const [day, month, year] = new Date(date).toLocaleDateString().split('/');
  return [year, month, day].join('-');
};

export const getNextXDate = (date: Date, x: number) =>
  new Date(date.setDate(date.getDate() + x));

export const getWeekDaysString = (date: Date, locale?: string) => {
  const pastMonday = getPastMonday(date);
  let currentDay = pastMonday;
  const weekDays = [];
  for (let i = 0; i < 7; i += 1) {
    const weekDayName = getDayName(currentDay, locale);
    const weekDayNumber = currentDay.getDate();
    weekDays.push(`${weekDayName} ${weekDayNumber}`);
    currentDay = getNextDay(currentDay);
  }
  return weekDays;
};
