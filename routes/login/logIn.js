const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { logindata } = require("./logindata.js");

function logIn() {
  return async (ctx) => {
    const { usermail, password } = ctx.request.body;
    try {
      const getdata = await logindata({ usermail });
      const ispassword = await bcrypt.compare(password, getdata.Item.password);
      if (ispassword) {
        const token = jwt.sign({ id: usermail }, process.env.secret_key, {
          expiresIn: "300s",
        });
        ctx.body = {
          message: "logedIn",
        };
        ctx.set("token", token);
        ctx.status = 200;
      } else {
        ctx.status = 404;
        ctx.body = { message: "Invalid credebtials" };
      }
    } catch (error) {
      ctx.body = {
        status: 404,
        message: "failed to logIn",
      };
    }
  };
}
exports.logIn = logIn;
