const express = require("express");
// const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/Develop"));

require("./app/routes/api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
