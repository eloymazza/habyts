import { getWeekDaysString } from './dateUtils';

const LOCALE_ES_AR = 'es-AR';

const TEST_DATE_1 = '2022-10-24 00:00:00';
const TEST_DATE_2 = '2022-10-25 00:00:00';
const TEST_DATE_3 = '2022-10-30 00:00:00';
const TEST_DATE_4 = '2022-10-19 00:00:00';
const TEST_DATE_5 = '2023-01-01 00:00:00';

const weekDayTests = [
  {
    description: `return weekdays of week of monday ${TEST_DATE_1} using locale ${LOCALE_ES_AR}`,
    date: new Date(TEST_DATE_1),
    locale: 'es-AR',
    expectedResult: [
      'lun 24',
      'mar 25',
      'mié 26',
      'jue 27',
      'vie 28',
      'sáb 29',
      'dom 30',
    ],
  },
  {
    description: `return weekdays of week of monday ${TEST_DATE_2} using locale ${LOCALE_ES_AR}`,
    date: new Date(TEST_DATE_2),
    locale: 'es-AR',
    expectedResult: [
      'lun 24',
      'mar 25',
      'mié 26',
      'jue 27',
      'vie 28',
      'sáb 29',
      'dom 30',
    ],
  },
  {
    description: `return weekdays of week of monday ${TEST_DATE_3} using locale ${LOCALE_ES_AR}`,
    date: new Date(TEST_DATE_3),
    locale: 'es-AR',
    expectedResult: [
      'lun 24',
      'mar 25',
      'mié 26',
      'jue 27',
      'vie 28',
      'sáb 29',
      'dom 30',
    ],
  },
  {
    description: `return weekdays of week of monday ${TEST_DATE_4} using locale ${LOCALE_ES_AR}`,
    date: new Date(TEST_DATE_4),
    locale: 'es-AR',
    expectedResult: [
      'lun 17',
      'mar 18',
      'mié 19',
      'jue 20',
      'vie 21',
      'sáb 22',
      'dom 23',
    ],
  },
  {
    description: `return weekdays of week of monday ${TEST_DATE_5} using locale ${LOCALE_ES_AR}`,
    date: new Date(TEST_DATE_5),
    locale: 'es-AR',
    expectedResult: [
      'lun 26',
      'mar 27',
      'mié 28',
      'jue 29',
      'vie 30',
      'sáb 31',
      'dom 1',
    ],
  },
];

describe('getWeekDaysString must', () => {
  weekDayTests.forEach(({ description, date, locale, expectedResult }) => {
    test(description, () => {
      const weekDays = getWeekDaysString(date, locale);
      expect(weekDays).toEqual(expectedResult);
    });
  });
});
