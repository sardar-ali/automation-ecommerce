const express = require("express")
require("dotenv").config();
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const { dbConnection } = require("./config/dbConnection");

const app = express();
const PORT = 4242;

app.use(express.json());
app.use(cookieParser())
dbConnection();

//SERVE STATIC DIRECTORY
app.use("/public/images/category", express.static("./public/images/category"));
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT)
})