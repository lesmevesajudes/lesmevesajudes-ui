//@flow
import { compose } from 'ramda';
import { startOfMonth, endOfMonth, formatISO, parseISO } from 'date-fns';

export const newDate = (year: number, month: number, day: number): Date => new Date(year, month - 1, day);
export const dateToString = (date: Date): string => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
export const startOfMonthISOEncoded = compose(encodeURIComponent, formatISO, startOfMonth);
export const endOfMonthISOEncoded = compose(encodeURIComponent, formatISO, endOfMonth);
export const parseISOEncoded = parseISO;
