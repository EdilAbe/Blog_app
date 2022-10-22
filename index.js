// require dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    resave: false,
    saveUninitialized: true,
  })
);

// App settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/blog", require("./controllers/BlogRouter"));
app.use("/user", require("./controllers/UserRouter"));

app.get("/", (req, res) => {
  res.render("components/LandingPage");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);

  // connect to MongoDB datastore
  //  mongoose (Object Data Modeling) for connecting to and sending queries to a mongo database
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {}

  mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });
});
