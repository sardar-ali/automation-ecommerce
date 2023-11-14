const express = require("express")
const cors = require('cors');
require("dotenv").config();
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const { dbConnection } = require("./config/dbConnection");

const app = express();
const PORT = 4242;
app.use(cors());
app.use((req, res, next) => {
    console.log("i am called")
    res.header('Access-Control-Allow-Origin', '*'); // '*' allows any origin, replace with your origin for better security
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.json());
app.use(cookieParser())
dbConnection();

//SERVE STATIC DIRECTORY
app.use("/public/images/category", express.static("./public/images/category"));
app.use("/public/images/product", express.static("./public/images/product"));

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT)
})