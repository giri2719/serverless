const tableInfo = require("../../index.js");

//get the user by id
const getUserById = async (member) => {
  const TABLE_MEMBERS = tableInfo.TABLE_MEMBERS.TABLE_MEMBERS;
  const ddb = tableInfo.TABLE_MEMBERS.ddb;
  const params = {
    TableName: TABLE_MEMBERS,
    Key: {
      mail: member,
    },
  };
  return await ddb.get(params).promise();
};
exports.getUserById = getUserById;
