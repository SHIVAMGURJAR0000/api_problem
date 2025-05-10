import express from "express";
import ServerlessHttp from "serverless-http";

const app = express();

app.use(express.json());
app.get("/.netlify/functions/api/", (req, res) => {
  res.json({
    message: "hello",
  });
});

app.post("/.netlify/functions/api/userArr", (req, res) => {
  const ids = req.query.ids; // "1,2,3,4"
  const idArray = ids ? ids.split(",") : [];

  res.json({
    message: "Data Received",
    data: idArray,
  });
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const handler = ServerlessHttp(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
