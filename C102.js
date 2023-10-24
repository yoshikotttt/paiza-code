const M = parseInt(lines[0], 10);
const N = parseInt(lines[M + 1], 10);

const aLiveDates = lines.slice(1, M + 1).map(Number);
const bLiveDates = lines.slice(M + 2, M + N + 2).map(Number);

let calendar = Array(31).fill("x");

const makeSchedule = (aLiveDates, bLiveDates) => {
  aLiveDates.forEach((date) => (calendar[date - 1] = "A"));
  bLiveDates.forEach((date) => {
    if (calendar[date - 1] === "A") {
      calendar[date - 1] = "AB";
    } else {
      calendar[date - 1] = "B";
    }
  });
  return calendar;
};

let lastBand = "";

const checkSchedule = (calendar) =>
  calendar.map((day) => {
    if (day === "AB") {
      lastBand = lastBand === "A" ? "B" : "A";
      return lastBand;
    }
    return day;
  });

// console.log(makeSchedule(aLiveDates,bLiveDates))

// console.log(checkSchedule(makeSchedule(aLiveDates,bLiveDates)))

checkSchedule(makeSchedule(aLiveDates, bLiveDates)).forEach((day) =>
  console.log(day)
);
