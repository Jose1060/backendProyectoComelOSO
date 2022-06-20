const { connect } = require("mongoose");

const connectDB = async () => {
	try {
		console.log("Connecting to MongoDB...");
		await connect(
			"mongodb+srv://root:Zo8A6nKeGfy9ZEDO@cluster0.ekjpk.mongodb.net/?retryWrites=true&w=majority"
		);
		console.log("MongoDB Connected");
	} catch (error) {
		console.log(error);
	}
};

module.exports = { connectDB };
