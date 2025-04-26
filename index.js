const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes/index.routes');
const { logErrors, errorHandler } = require('./middlewares/error.handler');
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
