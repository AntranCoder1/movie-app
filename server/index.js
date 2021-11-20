require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

const authRoute = require('./routes/Auth.route');
const userRoute = require('./routes/User.route');

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@movie.1clg4.mongodb.net/movie?retryWrites=true&w=majority`,
            {
                useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false
            }
        )
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
} 

connectDB();

// middleware
app.use(express.json());
app.use(morgan("common"));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

const port = 5000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})