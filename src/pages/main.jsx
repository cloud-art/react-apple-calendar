import React from "react";
import moment from "moment";
import styles from './main.scss'
import Calendar from '../components/Calendar'

const Main = () => {
    return (
        <main>

        <div className="container">
            <Calendar/>
        </div>

        </main>
    )
}

export default Main