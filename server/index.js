const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const controller = require('../routes/routes.js');


app.use('/getNode', controller);
app.use(express.static(path.resolve(__dirname, "../client", "dist")));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})