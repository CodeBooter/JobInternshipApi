const app= require('./app');
const dotenv = require('dotenv');

//config
dotenv.config({path: './config/config.env'});

//connect to database
const connectDB = require('./config/database');
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server started on port http://localhost:${process.env.PORT}`);
}
);

