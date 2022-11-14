const { deleteUserById } = require("./deleteUserById.js");

function deleteUserByIdFun() {
  return async (ctx) => {
    const { id } = ctx.params;
    try {
      await deleteUserById(id);
      ctx.body = { message: "user deleted successfully" };
    } catch (error) {
      ctx.status = 404;
      ctx.body = { message: error };
    }
  };
}
exports.deleteUserByIdFun = deleteUserByIdFun;
