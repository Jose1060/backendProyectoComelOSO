const { connect } = require("mongoose");

const connectDB = async () => {
	try {
		console.log("Connecting to MongoDB...");
		await connect(process.env.MONGO_URI);
		console.log("MongoDB Connected");
	} catch (error) {
		console.log(error);
	}
};

module.exports = { connectDB };
