const express = require('express')
const app = express()

const db = require("./models");

// Routers 
const loginRouter = require("./routes/login");
app.use("/login", loginRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    })
})
