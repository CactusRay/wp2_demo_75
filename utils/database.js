const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'wp2_demo_75',
    password: '0000'
})
console.log(`connect local PostgreSQL database ${pool.options.database} on port ${pool.options.port}`);

module.exports = pool; 