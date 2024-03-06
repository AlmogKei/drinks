const mongoose = require('mongoose');
require("dotenv").config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_CONNECT);
  // יש לשנות בסוף הכתובת לשם המסד נתונים שאנחנו עובדים מולו בקלאסטר
  // await mongoose.connect('mongodb+srv://almog:123blast@almog669.itvp0gu.mongodb.net/ariel23');
  console.log("connect mongo ariel23 atlas");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}