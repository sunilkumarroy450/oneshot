const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose
    .connect(
      `mongodb://oneshot:oneshot@ac-57evzds-shard-00-00.ygj2xqb.mongodb.net:27017,ac-57evzds-shard-00-01.ygj2xqb.mongodb.net:27017,ac-57evzds-shard-00-02.ygj2xqb.mongodb.net:27017/?ssl=true&replicaSet=atlas-s8vsrp-shard-0&authSource=admin&retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log(`DataBase is connected`))
    .catch((err) => console.log(err));
};
module.exports = connectDB;


// Client_ID=`1085065976799-o8rd9js38qgq24dmidbnio8ludb2qh9n.apps.googleusercontent.com`
// Client_Secret=`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`