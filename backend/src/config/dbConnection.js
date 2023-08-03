const mongoose = require("mongoose");

const dbConnection = () => {
  
    try {
        const result = mongoose.connect(process.env.MONGODB_URL);
        console.log("database connected successfully!")
    } catch (error) {
        console.log("Error ::", error)
    }

}

module.exports = {
    dbConnection
}