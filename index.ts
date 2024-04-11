import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const text: string = "hello world";
  res.send(text);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export const viteNodeApp = app;
