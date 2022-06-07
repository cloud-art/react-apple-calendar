import moment from "moment";
import React from "react";

import styles from './CalendarGrid.scss'

const CalendarGrid = ({StartDay}) => {
    const day = StartDay.clone().subtract(1, 'day')
    const daysCount = 42
    const daysArray = [...Array(daysCount)].map(() => day.add(1, 'day').clone())
    const weeksArray = [...Array(7)]

    return(
        <div className="calendar-grid">
            {weeksArray.map(() => 
                <div className="calendar-cell calendar-cell-week"></div>
            )}
            {daysArray.map((dayElement, i) => (
                // если это выходной, то стиль немного будет дополнен
                // если этот день начало месяца - будем показывать название месяца
                // если этот день сегодня - выделим
                <div className={
                        'calendar-cell '
                        + (dayElement.day() === 0 || dayElement.day() === 6? 'calendar-cell-weekend ':'')
                        + (dayElement.format('M') !== moment().endOf('day').format('M')? 'calendar-cell-anotherMonth ': '' )
                    } key={i}> 
                    <div className="calendar-row">
                        <div className="calendar-day">
                            <div className={dayElement.format('DDMMYYYY') == moment().endOf('day').format('DDMMYYYY')? 'calendar-day-number': ''}>
                                {dayElement.format('D')}
                            </div>                           
                        </div>
                    </div>    
                </div>
            ))}
        </div>
    )
}

export default CalendarGrid