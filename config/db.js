const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const uri = "mongodb+srv://lzhu66:zhulijuan@cluster0.hllj0jt.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;

