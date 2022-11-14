const { getUserById } = require("./getUserById.js");

function getUserByIdFun() {
  return async (ctx) => {
    const { id } = ctx.params;
    try {
      const getdata = await getUserById(id);
      ctx.body = { message: getdata };
    } catch (error) {
      ctx.status = 404;
      ctx.body = { message: error };
    }
  };
}
exports.getUserByIdFun = getUserByIdFun;
