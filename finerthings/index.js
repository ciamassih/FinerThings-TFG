const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const createError = require("http-errors");
const fileUpload = require('express-fileupload');

//Initializations
require('./database');
require('./passport/local-auth');

const app = express();


// configure Nunjucks with 'views' as templates directory
app.engine( 'html', nunjucks.render) ;
app.set( 'view engine', 'html');

nunjucks.configure(path.join(__dirname, '/views'), {
    autoescape: true,
    express: app
});

//middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded( { extended: true } )); // to support URL-encoded bodies
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms :body '));
app.use(session({
    secret: 'pruebasecreto',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(fileUpload());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => { //Esto es un Middleware propio para poder acceder al mensaje de signup en la vista de registrarse.
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    next(); // Sin este next se va a quedar estancado aqui
});

// Routes
app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/registrarse', require('./routes/registrarse'));
app.use('/logout', isAuthenticated, require('./routes/logout'));
app.use('/dashboard', isAuthenticated, require('./routes/dashboard'));
app.use('/libreria', isAuthenticated, require('./routes/libreria'));
app.use('/escribir', isAuthenticated, require('./routes/escribir'));
app.use('/libros', isAuthenticated, require('./routes/libros'));
app.use('/favorites', isAuthenticated, require('./routes/favorites'));
app.use('/escribir_form', isAuthenticated, require('./routes/escribir_form'));
app.use('/miperfil', isAuthenticated, require('./routes/miperfil'));
app.use('/comunidad', isAuthenticated, require('./routes/comunidad'));
app.use('/follow', isAuthenticated, require('./routes/follow'));
app.use('/perfil_form_foto', isAuthenticated, require('./routes/perfil_form_foto'));
app.use('/perfil_form_pass', isAuthenticated, require('./routes/perfil_form_pass'));

// Authentication
function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) { // req.isAuthenticated is a function provided by passport.
        return next();
    }
    res.redirect('/login')
}


module.exports = app;
