let express = require('express');
let path = require('path');
let app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'node_modules/rxstream/doc')));

app.listen(app.get('port'));