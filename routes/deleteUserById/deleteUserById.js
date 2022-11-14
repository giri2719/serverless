const tableInfo = require("../../index.js");

//delete a user by id
const deleteUserById = async (member) => {
  const TABLE_MEMBERS = tableInfo.TABLE_MEMBERS.TABLE_MEMBERS;
  const ddb = tableInfo.TABLE_MEMBERS.ddb;
  const params = {
    TableName: TABLE_MEMBERS,
    Key: {
      mail: member,
    },
  };
  return await ddb.delete(params).promise();
};
exports.deleteUserById = deleteUserById;
