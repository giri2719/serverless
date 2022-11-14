const tableInfo = require("../../index.js");

//log the user
const logindata = async ({ usermail }) => {
  const signup = tableInfo.signup.signup;
  const ddb = tableInfo.signup.ddb;
  const params = {
    TableName: signup,
    Key: {
      mailid: usermail,
    },
  };
  return await ddb.get(params).promise();
};
exports.logindata = logindata;
