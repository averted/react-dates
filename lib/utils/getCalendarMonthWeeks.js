Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getCalendarMonthWeeks;
function getCalendarMonthWeeks(month, enableOutsideDays) {
  var firstOfMonth = month.clone().startOf('month');
  var lastOfMonth = month.clone().endOf('month');

  var currentDay = firstOfMonth.clone();
  var currentWeek = [];
  var weeksInMonth = [];

  // days belonging to the previous month
  for (var i = 0; i < currentDay.weekday(); i++) {
    var prevDay = enableOutsideDays && currentDay.clone().subtract(i + 1, 'day');
    currentWeek.unshift(prevDay);
  }

  while (currentDay < lastOfMonth) {
    currentWeek.push(currentDay.clone());
    currentDay.add(1, 'd');

    if (currentDay.weekday() === 0) {
      weeksInMonth.push(currentWeek);
      currentWeek = [];
    }
  }

  // days belonging to the next month
  for (var k = currentDay.weekday(), count = 0; k < 7; k++, count++) {
    var nextDay = enableOutsideDays && currentDay.clone().add(count, 'day');
    currentWeek.push(nextDay);
  }

  weeksInMonth.push(currentWeek);

  return weeksInMonth;
}