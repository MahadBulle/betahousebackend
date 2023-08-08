const crypto = require('crypto');

const PRIVATE_KEY = crypto.randomBytes(32).toString('hex');

console.log("privateKey", PRIVATE_KEY)