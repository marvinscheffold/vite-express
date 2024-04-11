import express from "express";
const app = express();
const port = 3e3;
app.get("/", (req, res) => {
  const text = "hello world";
  res.send(text);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
const viteNodeApp = app;
export {
  viteNodeApp
};
