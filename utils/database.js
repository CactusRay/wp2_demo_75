const { Pool } = require('pg');

let pool;

if(process.env.NODE_ENV === 'SUPABASE'){

    pool = new Pool({
        user: 'postgres',
        host: process.env.SUPABASE_HOST,
        port: '5432',
        database: 'postgres',
        password: process.env.SUPABASE_PASSWORD
    });
    console.log(`connect SUPABASE PostgreSQL database ${pool.options.database} on port ${pool.options.port}`);

} else {
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        port: '5432',
        database: 'wp2_demo_75',
        password: '0000'
    });
    console.log(`connect local PostgreSQL database ${pool.options.database} on port ${pool.options.port}`);

}

module.exports = pool; 