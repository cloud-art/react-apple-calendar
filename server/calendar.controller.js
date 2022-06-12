const calendarModel = require('./calendar.model')
const db = require("./database")

class CalendarContoller{

    async getEvents(req, res){
        const events = (req.query.gte && req.query.lte)?
            await calendarModel.findBetweenTimestamp(req.query.gte, req.query.lte)
            : await calendarModel.findAll() 
        res.end(JSON.stringify(events.rows))
    }

    async createEvent(req, res){
        const {title, description, timestamp} = req.body
        const event = await calendarModel.create(title, description, timestamp)
        res.end(JSON.stringify(event.rows[0]))
    }

    async updateEvent(req, res){
        // const {firstName, lastName, groupName, id} = req.body
        const event = calendarModel.update()        
        res.end(JSON.stringify(student.rows[0]))
    }

    async deleteEvent(req, res) {
        const id = req.params.id
        const event = calendarModel.remove()
        res.end(JSON.stringify('Succesfully deleted'))
    }
}

module.exports = new CalendarContoller()