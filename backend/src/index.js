

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
//app.use(cors({
 //   origin: 'http://127.0.0.1:3000',
   // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //credentials: true,
    //optionsSuccessStatus: 204,
//}));
app.use(cors());
app.use(cors({ origin: 'http://178.16.138.6' }));
app.use(express.json());
app.use(cookieParser())
dbConnection();

//SERVE STATIC DIRECTORY
app.use("/public/images/category", express.static("./public/images/category"));
app.use("/public/images/product", express.static("./public/images/product"));

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)

app.listen(PORT,'0.0.0.0', () => {
    console.log("Server is running on port ", PORT)
})
