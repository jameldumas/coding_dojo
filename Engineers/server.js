require("dotenv").config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.MY_PORT;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

require('./config/mongoose.config');

require('./routes/engineers.routes')(app);
require('./routes/userEng.routes')(app);
require('./routes/userMan.routes')(app);
require('./routes/projects.routes')(app);

app.listen(port, () => console.log("Your server is running for engineer data!"));
