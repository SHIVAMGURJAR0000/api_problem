import express from "express";
import ServerlessHttp from "serverless-http";

const app = express();

app.use(express.json());
app.get("/.netlify/functions/api/user", (req, res) => {
  res.send("Hello from Express with ESM!");
});

app.post("/.netlify/functions/api/userArr", (req, res) => {
  const { data } = req.body;

  console.log(data);
  res.json({
    message: "Data Received",
    data: data,
  });
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const handler = ServerlessHttp(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
