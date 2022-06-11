import moment from "moment";
import React from "react";
import { useState, useEffects } from "react";

import CalendarHeader from './CalendarHeader'
import CalendarMain from './CalendarMain'
import CalendarGrid from './CalendarGrid'
import styles from './calendar.scss'

const Calendar = () => {
    moment.updateLocale('en', {week: {dow: 1}})
    const [thisMonth, setThisMonth] = useState(moment());
    const StartDay = thisMonth.clone().startOf('month').startOf('week')
    
    const previousMonthHandler = () => {setThisMonth((thisMonth) => thisMonth.clone().subtract(1, 'months'))}
    const todayMonthHandler = () => {setThisMonth(moment())}
    const nextMonthHandler = () => {setThisMonth(thisMonth => thisMonth.clone().add(1, 'months'))}


    return(
        <div className="calendar">
            <CalendarHeader/>
            <CalendarMain 
                thisMonth={thisMonth}
                previousMonthHandler={previousMonthHandler}
                todayMonthHandler={todayMonthHandler}
                nextMonthHandler={nextMonthHandler}/>
            <CalendarGrid 
                StartDay={StartDay}
                thisMonth={thisMonth}/>
        </div>       
    )
}

export default Calendar