const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token;
  console.log("middleware hit");
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ massage: "no token, auhorization denied " });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      console.log("Decoded user : ", req.user);

      next();
    } catch (err) {
      res.status(400).json({ massage: "token is not valid " });
    }
  } else {
    return res.status(401).json({ massage: "no token, auhorization denied " });
  }
};

module.exports = verifyToken;
