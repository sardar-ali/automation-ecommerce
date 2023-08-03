const express = require("express")
require("dotenv").config();
const cookieParser = require("cookie-parser")
const userRoutes  = require("./routes/userRoutes");
const { dbConnection } = require("./config/dbConnection");

const app = express();
const PORT = 4242;

app.use(express.json());
app.use(cookieParser())
dbConnection();

app.use("/api/v1/user", userRoutes)

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT)
})