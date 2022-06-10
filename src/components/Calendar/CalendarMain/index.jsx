import React from "react";
import styles from './CalendarMain.scss'

const CalendarMain = ({thisMonth, previousMonthHandler, todayMonthHandler, nextMonthHandler}) => {

    return(
        <div className="calendar-main">
            <div>
                <span className="span-title"><b>{thisMonth.format('MMMM')}</b></span>
                <span className="span-title">{thisMonth.format('YYYY')}</span>
            </div>
            <div>
                <button className="calendar-month-switch" onClick={previousMonthHandler}>&lt;</button>
                <button className="calendar-month-switch calendar-today-button" onClick={todayMonthHandler}>Today</button>
                <button className="calendar-month-switch" onClick={nextMonthHandler}>&gt;</button>
            </div>
        </div>
    )
}

export default CalendarMain