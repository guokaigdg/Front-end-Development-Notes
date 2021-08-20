import React, { createRef, PureComponent } from "react";
import dayjs from "dayjs";
import { head, formatMonthData } from "./util.js";
import "./index.scoped.scss";

class MonthView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentMonthFirstDay: null,
      monthDates: [], // 月日历展示的日期( 前一月 当月 下一月 )
      currentDate: "",
    };
    this.isTouching = false;
    this.calendarRef = createRef(null);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { currentDate } = nextProps;
    if (currentDate !== prevState.currentDate) {
      const dayjsDate = dayjs(currentDate);
      return {
        ...formatMonthData(dayjsDate),
        currentDate,
      };
    }
    return null;
  }

  handleMonthToggle = (type) => {
    const { currentMonthFirstDay } = this.state;
    const isMonthView = true;
    const isPrev = type === "prev";
    const formatFun = formatMonthData;
    const operateDate = currentMonthFirstDay;
    const updateStateData = formatFun(
      operateDate[isPrev ? "subtract" : "add"](
        1,
        isMonthView ? "month" : "week"
      )
    );
    this.setState(updateStateData);
  };

  handleDayClick = (date) => {
    this.props.onDateClick(date);
  };

  render() {
    const { monthDates, currentMonthFirstDay } = this.state;
    const { currentDate, markDates } = this.props;
    const isMonthView = true;
    return (
      <div className="react-h5-calendar">
        <div className="calendar-operate">
          <div>取消</div>
          <div
            className="icon switch-icon"
            onClick={this.handleMonthToggle.bind(this, "prev")}
          >
            ＜
          </div>
          <div>{currentMonthFirstDay.format("YYYY-MM")}</div>
          <div
            className="icon  switch-icon"
            onClick={this.handleMonthToggle.bind(this, "next")}
          >
            ＞
          </div>
          <div>确认</div>
        </div>
        <div className="calendar-head">
          {head.map((i) => (
            <div className="head-cell" key={i}>
              {i}
            </div>
          ))}
        </div>

        <div
          className={`calendar-body ${isMonthView ? "" : "week-mode"}`}
          ref={this.calendarRef}
        >
          <div
            style={{
              transform: `translate3d(${-0 * 100}%, 0, 0)`,
            }}
          >
            {monthDates.map((item, index) => {
              return (
                <div
                  className="month-cell"
                  key={`month-cell-${index + item}`}
                  style={{
                    transform: `translate3d(${(index - 1) * 100}%, 0, 0)`,
                    transitionDuration: "0.3s",
                  }}
                >
                  {item.map((date) => {
                    const isCurrentDay = date.isSame(currentDate, "day");
                    const isOtherMonthDay = !date.isSame(
                      currentMonthFirstDay,
                      "month"
                    );
                    const isMarkDate = markDates.find((i) =>
                      date.isSame(i.date, "day")
                    );
                    const resetMarkType =
                      (isMarkDate && isMarkDate.markType) || "dot";
                    const showDotMark = isCurrentDay
                      ? false
                      : isMarkDate && resetMarkType === "dot";
                    const showCircleMark = isCurrentDay
                      ? false
                      : isMarkDate && resetMarkType === "circle";
                    return (
                      <div
                        key={Math.random()}
                        className={`day-cell ${
                          isOtherMonthDay ? "is-other-month-day" : ""
                        }`}
                        onClick={this.handleDayClick.bind(this, date)}
                      >
                        <div
                          className={`day-text ${
                            isCurrentDay ? "current-day" : ""
                          } ${showCircleMark ? "circle-mark" : ""}`}
                          style={
                            showCircleMark
                              ? { borderColor: isMarkDate.color || "#4378be" }
                              : null
                          }
                        >
                          {date.format("DD")}
                        </div>
                        {/* {showDotMark && (
                                                    <div
                                                        className={isMarkDate ? 'dot-mark' : ''}
                                                        style={{background: isMarkDate.color || '#4378be'}}
                                                    />
                                                )} */}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

MonthView.defaultProps = {
  currentDate: dayjs().format("YYYY-MM-DD"),
  onDateClick: () => {},
  markDates: [],
};

export default MonthView;
