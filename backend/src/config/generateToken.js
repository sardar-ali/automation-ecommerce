
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, 'secret', { expiresIn: 60 * 60 });
}

module.exports = { generateToken }