import mongoose from 'mongoose';
import { MONGO_URI } from '$env/static/private';

const connectDB = async () => {
	try {
		console.log(MONGO_URI);
		await mongoose.connect(MONGO_URI);
		console.log('Database Connected');
	} catch (error) {
		console.error('Error connecting to database', error);
		process.exit(1);
	}
};

export default connectDB;
