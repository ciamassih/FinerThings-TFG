const passport = require(`passport`);
const LocalStrategy = require('passport-local').Strategy;

User = require('../models/user')

passport.serializeUser((user, done) => {
    done(null, user.id);

});

passport.deserializeUser( async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {

    const existCheck = await User.findOne({username: username});

    if(existCheck){ //si existe el username manda un error
        return done(null, false, req.flash('signupMessage','Username is taken.'));
    } else{ //Si no existe continuamos
        let profilepic = req.files.profilepic;
        let uploadPath = process.cwd() + "/finerthings/public/img/" + req.body.userName + ".jpg";

        profilepic.mv(uploadPath, function (err){
            if (err) console.log(err)
        });

        let value = username
        value = value.trim().toLowerCase();

        const newUser = new User();
        newUser.username = username
        newUser.usernamesearch = value
        newUser.password = newUser.encryptPassword(password);
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.email = req.body.email;
        newUser.birthday = Date();
        newUser.isAdmin = "false";
        newUser.photo = username + ".jpg"
        await newUser.save();
        done(null, newUser);

    }
}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true

}, async (req, username, password, done) => {

    const existCheck = await User.findOne({username: username});
    if(!existCheck){
        return done(null, false, req.flash('signinMessage', 'User not found'));
    }
    if(!existCheck.validatePassword(password)){
        return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
    }
    return done(null, existCheck); //existCheck se guarda como req.user o req.session.user
}));