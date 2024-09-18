const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, "Ctpl#2023?", (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = { authenticateToken };