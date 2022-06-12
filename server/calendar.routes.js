const Router = require('express')
const router = new Router()
const calendarController = require('./calendar.controller')

router.get('/events', calendarController.getEvents)
router.post('/events', calendarController.createEvent)
router.put('/events', calendarController.updateEvent)
router.delete('/events/:id', calendarController.deleteEvent)

module.exports = router