import * as sqlite3 from 'sqlite3';
sqlite3.verbose();

let db: sqlite3.Database;

export function initDB(): sqlite3.Database {
    db = new sqlite3.Database(':memory', (err) => {
        if(err) return console.error(err.message);
        console.log('connected to the database rn');
    });
    return db;
}

export function closeDB() {
    db.close();
}


