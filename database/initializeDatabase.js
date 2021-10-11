const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
    // process.env.DATABSE_NAME,
    // process.env.DATABASE_USERNAME,
    // process.env.DATABASE_PASSWORD,
    // {
    //     host: 'localhost',
    //     dialect: 'postgres'
    // }
);

sequelize.sync();

//connecting to POSTGRES
(async function() {
    try {
        await sequelize.authenticate();
        console.log(`DB ${process.env.DATABSE_NAME}, CONNECTED SUCCESSFULLY`);
    } catch(err) {
        console.log(`Unablt to connect Database`);
    }
})();

// const { Client } = require('pg');

// const client = new Client({
  
// });

// client.connect();

module.exports = sequelize;