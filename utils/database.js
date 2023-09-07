import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('DB already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('mongoDb connected');

    } catch (error) {
        console.log('Database error: ', error);
    }

}

// connectDB();
