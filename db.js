const Pool = require('pg').Pool
require('dotenv').config()

var dbConfig = {
    host: 'localhost', 
    port: 5432,
    database: 'myDatabase',
    user: 'myUser',
    password: 'myPassword'
}

const pool = new Pool(dbConfig)

module.exports = pool