const jwt = require("jsonwebtoken");
const auth = (ctx, next) => {
  const { auth } = ctx.request.header;
  try {
    jwt.verify(auth, process.env.secret_key);
    return next();
  } catch (error) {
    ctx.status = 404;
    ctx.body = { message: "Invalid token" };
  }
};
module.exports = { auth };
