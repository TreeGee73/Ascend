const express = require("express");
const db = require("./models/index.js");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;

<<<<<<< HEAD
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
=======
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.set("view engine", "handlebars");
>>>>>>> main

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/Develop"));

require("./app/routes/api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);

db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
})
