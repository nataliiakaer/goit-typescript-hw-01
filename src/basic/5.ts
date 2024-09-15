// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday
// }

// const isWeekend = (day) => {
// }

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  const dayOff = day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
  console.log("Is it a day off? - ", dayOff);
  return dayOff;
};

isWeekend(DayOfWeek.Saturday);
