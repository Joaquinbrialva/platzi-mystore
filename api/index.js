const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const routerApi = require('./routes/index.routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
app.use(express.json());
app.use(morgan('dev'));

const whiteList = ['http://localhost:8080', 'http://127.0.0.1:8080'];
const options = {
  origin: (origin, cb) => {
    if (whiteList.includes(origin) || !origin) {
      cb(null, true);
    } else {
      cb(new Error('no permitido'));
    }
  }
};

app.use(cors(options));

routerApi(app);

app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
});


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
