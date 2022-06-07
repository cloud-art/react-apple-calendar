import moment from "moment";
import React from "react";

import CalendarHeader from './CalendarHeader'
import CalendarMain from './CalendarMain'
import CalendarGrid from './CalendarGrid'
import styles from './calendar.scss'

const Calendar = () => {
    moment.updateLocale('en', {week: {dow: 1}})
    const StartDay = moment().startOf('month').startOf('week')

    return(
        <div className="calendar">
            <CalendarHeader/>
            <CalendarMain/>
            <CalendarGrid StartDay={StartDay}/>
        </div>       
    )
}

export default Calendar