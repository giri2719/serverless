const { addMember } = require("./addMember.js");

function addNewUsers() {
  return async (ctx) => {
    const { member } = ctx.params;
    try {
      await addMember(member);
      ctx.body = { message: "user created successfully" };
    } catch (error) {
      ctx.status = 404;
      ctx.body = { message: error };
    }
  };
}
exports.addNewUsers = addNewUsers;
