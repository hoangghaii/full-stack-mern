const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const userRoute = require('./routes/user');

const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DBConnection successfully'))
  .catch((error) => console.log(`DBConnection error - ${error}`));

app.use(express.json());
app.use('/api/users', userRoute);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
