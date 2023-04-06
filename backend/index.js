require('dotenv').config();
const express = require('express');

//express app
const app = express();

const workoutRoutes = require('./routes/workouts');

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get('/', (req, res) => {
  res.json({ msg: 'welcome to the net ninja' });
});

app.use('/api/workouts', workoutRoutes);

//listen for request
app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT);
});
