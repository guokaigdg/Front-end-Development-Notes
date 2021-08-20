/*
 * @Author: guokai05
 * @Date: 2021-08-20 14:55:53
 * @LastEditors: guokai05
 * @LastEditTime: 2021-08-20 14:55:54
 */

import React, {FC, useEffect, useState} from 'react';
import dayjs from 'dayjs';
import CX from 'classnames';
import Divider from '../Divider';
import {head, formatMonthData} from './util.js';
import './index.scoped.scss';

interface MonthViewProps {
    currentDate: any;
    onDateClick: (...args: any) => any;
    onCancel?: (...args: any) => any;
    onConfirm?: (...args: any) => any;
}

const MonthView: FC<MonthViewProps> = (props) => {
    const {currentDate, onDateClick, onCancel, onConfirm} = props;
    const [currentMonthFirstDay, setCurrentMonthFirstDay] = useState<any>(); // 月份第一天
    const [monthDates, setMonthDates] = useState<any>(); // 月日历展示的日期( 前一月、当月、下一月 )

    useEffect(() => {
        const dayjsDate = dayjs(currentDate);
        setCurrentMonthFirstDay(formatMonthData(dayjsDate).currentMonthFirstDay);
        setMonthDates(formatMonthData(dayjsDate).monthDates);
    }, [currentDate]);

    // 切换月份
    const handleMonthToggle = (type: string) => {
        const isPrev = type === 'prev';
        const formatFun = formatMonthData;
        const operateDate = currentMonthFirstDay;
        const updateStateData = formatFun(operateDate[isPrev ? 'subtract' : 'add'](1, 'month'));
        setCurrentMonthFirstDay(updateStateData.currentMonthFirstDay);
        setMonthDates(updateStateData.monthDates);
    };

    // 选中某一天
    const handleDayClick = (date: any) => {
        onDateClick(date);
    };

    return (
        <div className='meeting-calendar'>
            <div className='calendar-operate'>
                <div onClick={onCancel}>取消</div>
                <div className='mid'>
                    <div className='left-icon' onClick={() => handleMonthToggle('prev')}>
                        ＜
                    </div>
                    <div className='month-title'>
                        {currentMonthFirstDay && currentMonthFirstDay.format('YYYY年MM月')}
                    </div>
                    <div className='right-icon' onClick={() => handleMonthToggle('next')}>
                        ＞
                    </div>
                </div>
                <div className='confirm-button' onClick={onConfirm}>
                    确认
                </div>
            </div>
            <Divider />
            <div className='calendar-head'>
                {head.map((i) => (
                    <div className='head-cell' key={i}>
                        {i}
                    </div>
                ))}
            </div>
            <div className='calendar-body'>
                {monthDates?.map((item: any, index: number) => {
                    return (
                        <div
                            className='month-cell'
                            key={`month-cell-${index + item}`}
                            style={{
                                transform: `translate3d(${(index - 1) * 100}%, 0, 0)`,
                                transitionDuration: '0.3s',
                            }}
                        >
                            {item.map((date: any) => (
                                <div key={date.format()} className='day-cell-wrap' onClick={() => handleDayClick(date)}>
                                    <div
                                        className={CX('day-cell-item', {
                                            'other-month-day': !date.isSame(currentMonthFirstDay, 'month'),
                                        })}
                                    >
                                        <div
                                            className={CX('day-text ', {
                                                'current-day': date.isSame(currentDate, 'day'),
                                            })}
                                        >
                                            {date.format('DD')}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MonthView;
