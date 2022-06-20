const { connect } = require("mongoose");

const connectDB = async () => {
	try {
		console.log("Connecting to MongoDB...");
		await connect(
			"mongodb://mongo:vrWFnBL8zQmdsCBhHZwy@containers-us-west-71.railway.app:5584"
		);
		console.log("MongoDB Connected");
	} catch (error) {
		console.log(error);
	}
};

module.exports = { connectDB };
