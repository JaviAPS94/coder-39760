import express from "express";

const app = express();

app.get("/operacionsencilla", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  res.send({ message: "Operación sencilla", result: sum });
});

app.get("/operacioncompleja", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 5e8; i++) {
    sum += i;
  }
  res.send({ message: "Operación compleja", result: sum });
});

app.listen(3030, () => {
  console.log("Server listening on port 3030");
});