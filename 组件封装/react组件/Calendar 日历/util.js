export const throttle = (fun, delay) => {
  let last = 0;
  return (...params) => {
    const now = Date.now();
    if (now - last > delay) {
      fun.apply(this, params);
      last = now;
    }
  };
};

/**
 *
 * @param {*} dayjsDate dayjs对象
 */
export const formatMonthData = (dayjsDate) => {
  const currentMonthFirstDay = dayjsDate.startOf("month");
  // 然后当前日历的第一天就应该是月份第一天的当周周一
  const currentMonthStartDay = currentMonthFirstDay.startOf("week");
  const prevMonthFirstDay = currentMonthFirstDay.subtract(1, "month");
  const prevMonthStartDay = prevMonthFirstDay.startOf("week");
  const nextMonthFirstDay = currentMonthFirstDay.add(1, "month");
  const nextMonthStartDay = nextMonthFirstDay.startOf("week");
  return {
    currentMonthFirstDay,
    monthDates: [
      Array.from({ length: 42 })
        .fill("")
        .map((_, index) => prevMonthStartDay.add(index, "day")),
      Array.from({ length: 42 })
        .fill("")
        .map((_, index) => currentMonthStartDay.add(index, "day")),
      Array.from({ length: 42 })
        .fill("")
        .map((_, index) => nextMonthStartDay.add(index, "day")),
    ],
  };
};

export const head = ["日", "一", "二", "三", "四", "五", "六"];
