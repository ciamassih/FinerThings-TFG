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
            usernamesearch: "admin",
            password: bcrypt.hashSync("admin", bcrypt.genSaltSync(10)),
            firstName: "admin",
            lastName: "admin",
            email: "admin@finerthings.com",
            description: "This is the admin account",
            favoritos: [],
            following: [],
            followers: [],
            isAdmin: "true"
        },
        {
            username: "edgar_allan_poe",
            usernamesearch: "edgar allan poe",
            password: bcrypt.hashSync("test", bcrypt.genSaltSync(10)),
            firstName: "Edgar Allan",
            lastName: "Poe",
            email: "e_poe@finerthings.com",
            description: "This is a test account",
            favoritos: [],
            following: [],
            followers: [],
            isAdmin: "false"
        },
        {
            username: "haruki_murakami",
            usernamesearch: "haruki murakami",
            password: bcrypt.hashSync("test", bcrypt.genSaltSync(10)),
            firstName: "Haruki",
            lastName: "Murakami",
            email: "haru_kami@finerthings.com",
            description: "This is a test account",
            favoritos: [],
            following: [],
            followers: [],
            isAdmin: "false"
        },
        {
            username: "horacio_quiroga",
            usernamesearch: "horacio quiroga",
            password: bcrypt.hashSync("test", bcrypt.genSaltSync(10)),
            firstName: "Horacio",
            lastName: "Quiroga",
            email: "horacio_quiroga@finerthings.com",
            description: "This is a test account",
            favoritos: [],
            following: [],
            followers: [],
            isAdmin: "false"
        }


    ];

    await User.insertMany(initUsers)
}
Promise.all([

    initDB()

]).then(process.exit);

