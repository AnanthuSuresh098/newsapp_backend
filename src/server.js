const app = require("./index");

app.listen(process.env.PORT || 2345, async function () {
  try {
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err);
  }
});
