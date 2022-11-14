const tableInfo = require("../../index.js");

//add a user
const addMember = async (member) => {
  const TABLE_MEMBERS = tableInfo.TABLE_MEMBERS.TABLE_MEMBERS;
  const ddb = tableInfo.TABLE_MEMBERS.ddb;
  const params = {
    TableName: TABLE_MEMBERS,
    Item: {
      mail: member,
    },
  };
  return await ddb.put(params).promise();
};
exports.addMember = addMember;
