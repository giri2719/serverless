const tableInfo = require("../../index.js");

function getAllUsers() {
  return async function (ctx) {
    const TABLE_MEMBERS = tableInfo.TABLE_MEMBERS.TABLE_MEMBERS;
    const ddb = tableInfo.TABLE_MEMBERS.ddb;
    const params = {
      TableName: TABLE_MEMBERS,
    };
    try {
      const members = await ddb.scan(params).promise();
      ctx.body = { message: members };
    } catch (error) {
      ctx.status = 404;
      ctx.body = { message: error };
    }
  };
}
exports.getAllUsers = getAllUsers;
