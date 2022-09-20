const addDays = require("date-fns/addDays");

function funcDate(no_of_days) {
  const result = addDate(new Date(2020, 8, 22), no_of_days);
  return result;
}

// console.log(date(3));

module.exports = funcDate;
