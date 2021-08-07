require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Add CORS options
const corsOptions = { origin: "*", optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect to mongooseDB
const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.zar7b.mongodb.net/mern-learnit?retryWrites=true&w=majority`,
			{
				useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			}
		);
		console.log("MongoDB connected");
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};
connectDB();

app.get("/", (req, res) => res.send("Wellcome to MERN-001"));

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/posts.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
