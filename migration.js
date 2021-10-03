const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./blogposts.sqlite');

db.serialize(() => {
    db.run('DROP TABLE IF EXISTS Blogs');
    db.run(`CREATE TABLE IF NOT EXISTS Blogs (
        id INTEGER PRIMARY KEY, 
        title TEXT NOT NULL, 
        content TEXT NOT NULL 
    )`);
});
