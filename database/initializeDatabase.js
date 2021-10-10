const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('postgres://dmcqlgjuvrwjeu:900d27b419ed79193ecec5fb9bfb0ac9604611af35a15f7541beea54a8c96093@ec2-35-171-171-27.compute-1.amazonaws.com:5432/d8dt0mfi8mt22') 
// const sequelize = new Sequelize(
//     process.env.DATABSE_NAME,
//     process.env.DATABASE_USERNAME,
//     process.env.DATABASE_PASSWORD,
//     {
//         host: 'localhost',
//         dialect: 'postgres'
//     }
// );

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

module.exports = sequelize;