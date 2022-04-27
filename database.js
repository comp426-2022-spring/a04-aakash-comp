

const Database = require('better-sqlite3')

const logdb = new Database('log.db')

const stmt = logdb.prepare(`SELECT name FROM sqlite_master WHERE type='table' and 'access';`);
let row = stmt.get();

if (row === undefined) {
    console.log('Log database missing. Create log database')
    
    const sqlInit = `
        CREATE TABLE access ( id INTEGER PRIMARY KEY, remoteaddr VARCHAR, remoteuser VARCHAR, datetime VARCHAR, method VARCHAR, url VARCHAR, httpversion NUMERIC, status INTEGER, referer VARCHAR, useragent VARCHAR)`
    
    logdb.exec(sqlInit)
}
else{
    console.log('Log exists')
}


module.exports = logdb