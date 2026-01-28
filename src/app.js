const express = require('express');
const connectDB = require('./config/db');

const app = express();

// DB connection
connectDB();

// middleware
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/tasks', require('./routes/task.routes'));

app.get('/ping',(req,res)=>{
    res.send('pong');
});
module.exports = app;
