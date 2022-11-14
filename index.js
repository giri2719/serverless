const serverless = require("serverless-http");
const aws = require("aws-sdk");
const bodyparse = require("koa-bodyparser");
const koa = require("koa");
const Router = require("koa-router");
const { auth } = require("./middleware/auth.js");
const { getAllUsers } = require("./routes/getAllusers/getAllUsers.js");
const { addNewUsers } = require("./routes/addUser/addNewUsers.js");
const { getUserByIdFun } = require("./routes/getUserById/getUserByIdFun.js");
const {
  deleteUserByIdFun,
} = require("./routes/deleteUserById/deleteUserByIdFun.js");
const { signUp } = require("./routes/signUp/signUp.js");
const { logIn } = require("./routes/login/logIn.js");
const app = new koa();
const router = new Router();
require("dotenv").config();
app.use(bodyparse());
aws.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const ddb = new aws.DynamoDB.DocumentClient();
app.use(router.routes()).use(router.allowedMethods());
const TABLE_MEMBERS = "userTable";
const signup = "signup";

//Routes
router.get("/", auth, getAllUsers());
router.post("/add/:member", auth, addNewUsers());
router.get("/:id", auth, getUserByIdFun());
router.delete("/:id", auth, deleteUserByIdFun());
router.post("/signup", signUp());
router.post("/login", logIn());

//exports
exports.TABLE_MEMBERS = { TABLE_MEMBERS, ddb };
exports.signup = { signup, ddb };

app.listen(3000, () => console.log("server started"));
module.exports.handler1 = serverless(app);
