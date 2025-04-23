const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes/index.routes');
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
