import React from "react";
import styles from './CalendarMain.scss'

const CalendarMain = ({Today}) => {

    return(
        <div className="calendar-main">
            <div>
                <span className="span-title"><b>{Today.format('MMMM')}</b></span>
                <span className="span-title">{Today.format('YYYY')}</span>
            </div>
            <div>
                <button className="calendar-month-switch">&lt;</button>
                <button className="calendar-month-switch calendar-today-button">Today</button>
                <button className="calendar-month-switch">&gt;</button>
            </div>
        </div>
    )
}

export default CalendarMain