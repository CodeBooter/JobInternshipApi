const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    }).then((data)=>{
        console.log(`MongoDB connected: ${data.connection.host}`);
    }
    ).catch((err)=>{
        console.log(err);
    }
    );
}

module.exports = connectDB;
