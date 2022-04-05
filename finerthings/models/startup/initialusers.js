User = require('../user')
require('../../database');
const bcrypt = require('bcrypt-nodejs');

async function initDB() {
    try{
        await User.collection.drop();
    } catch (e){
        console.log("Collection didn't exist, will be created.")
    }

    const initUsers = [
        {
            username: "admin",
            password: bcrypt.hashSync("admin", bcrypt.genSaltSync(10)),
            firstName: "admin",
            lastName1: "admin",
            lastName2: "admin",
            email: "admin@finerthings.com",
            birthday: new Date("<2000-01-01>"),
            description: "This is the admin account",
            isAdmin: "true"
        },
        {
            username: "test",
            password: bcrypt.hashSync("test", bcrypt.genSaltSync(10)),
            firstName: "test",
            lastName1: "test",
            lastName2: "test",
            email: "test@finerthings.com",
            birthday: new Date("<2000-01-01>"),
            description: "This is a test account",
            isAdmin: "false"
        }
    ];

    await User.insertMany(initUsers)
}
Promise.all([

    initDB()

]).then(process.exit);
