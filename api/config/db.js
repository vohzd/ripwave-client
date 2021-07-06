const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.connection.on("error", error => console.log(error));
