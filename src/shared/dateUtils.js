//@flow
export const newDate = (year: number, month: number, day: number): Date => new Date(year, month - 1, day);
export const dateToString = (date: Date): string => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
