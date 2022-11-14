const bcrypt = require("bcrypt");
const tableInfo = require("../../index.js");

function signUp() {
  return async (ctx) => {
    const signup = tableInfo.signup.signup;
    const ddb = tableInfo.signup.ddb;
    const { usermail, password } = ctx.request.body;
    const hasspassword = async (password) => {
      const salt = await bcrypt.genSalt(1);
      const hasspass = await bcrypt.hash(password, salt);
      return hasspass;
    };
    const securePassword = await hasspassword(password);
    const params = {
      TableName: signup,
      Item: {
        mailid: usermail,
        password: securePassword,
      },
    };
    try {
      await ddb.put(params).promise();
      ctx.body = { message: "user created successfully" };
    } catch (error) {
      ctx.status = 404;
      ctx.body = { message: error };
    }
  };
}
exports.signUp = signUp;
