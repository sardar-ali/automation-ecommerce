
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    console.log("id ::", id)
    return jwt.sign({ id }, 'secret', { expiresIn: 60 * 60 });
}

module.exports = { generateToken }