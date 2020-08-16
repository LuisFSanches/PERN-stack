const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");
    if (!jwtToken) {
      return res.status(403).json("Not Authorize");
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    console.log(payload);
    req.user = payload.user;
  } catch (err) {
    console.log(err);
    return res.status(403).json("Not Authorize");
  }
  next();
};
