var express = require('express');
var reload = require('reload');
var app = express();
var connexionData = require('./data/connexion.json');

app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('connexionData', connexionData);

//globals variables
app.locals.siteTitle = 'Roux Meetups';

app.use(express.static('app/public'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/connexion'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
