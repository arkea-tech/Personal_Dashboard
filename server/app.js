const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

//To Delete
const cookieParser = require('cookie-parser');

const oauth2Routes = require('./routes/oauth2');
const servicesRoutes = require('./routes/services');
const managedServicesRoutes = require('./routes/managed_services');
const profileRoutes = require('./routes/profile');
const youtubeRoutes = require('./routes/widgets/youtube');
const weatherRoutes = require('./routes/widgets/weather');
const musicPlayerRoutes = require('./routes/widgets/music_player');
const calendarRoutes = require('./routes/widgets/calendar');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const stuffFileRoutes = require('./routes/stuff_file');

const app = express();

mongoose.connect('mongodb+srv://WoshiWoshu:greatwish987@cluster0.jya02.mongodb.net/Personal_Dashboard?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully connected to MongoDB Atlas !');
})
.catch((error) => {
    console.log('Unable to connect to MongoDB Atlas !');
    console.error(error);
});
//To delete
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', __dirname);

app
.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})
.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/stuff/file', stuffFileRoutes);

app.use('/about.json', managedServicesRoutes);
app.use('/oauth2', oauth2Routes);
app.use('/services', servicesRoutes);
app.use('/profile', profileRoutes);
app.use('/widget/youtube', youtubeRoutes);
app.use('/widget/weather', weatherRoutes);
app.use('/widget/music_player', musicPlayerRoutes);
app.use('/widget/calendar', calendarRoutes);

module.exports = app;
