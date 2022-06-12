const db = require("./database")

class CalendarModel{
    table = "event"

    findAll() {
        return db.query(`SELECT * FROM ${this.table}`)
    }

    findBetweenTimestamp(_gte, _lte){
        const rowName = 'timestamp'
        return db.query(`SELECT * FROM ${this.table} WHERE ${rowName} > ${_gte} AND ${rowName} < ${_lte}`)
    }

    create(title, description, timestamp) {
        return db.query(`INSERT INTO ${this.table} (title, description, timestamp) VALUES ($1, $2, $3) RETURNING *`,[title, description, timestamp])
    }

    update(firstName, lastName, groupName, id) {
        return db.query(`UPDATE ${this.table} set first_name=${firstName}, last_name=${lastName}, group_name=${groupName} WHERE id=${id} RETURNING *`)
    }
    
    remove(id) {
        return db.query(`DELETE FROM ${this.table} WHERE id = ${id}`) 
    }
}

module.exports = new CalendarModel