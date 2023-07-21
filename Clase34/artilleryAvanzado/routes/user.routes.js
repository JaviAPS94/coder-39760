import { Router } from "express";
import { User } from "../models/users.model.js";
import faker from "faker";

const router = Router();

router.get("/faker", async (req, res) => {
  const user = {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  res.send(user);
});

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, lastname, email, password } = req.body;

  const result = await userModel.findByIdAndUpdate(id, {
    name,
    lastname,
    email,
    password,
  });

  res.send(result);
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  const result = await userModel.findByIdAndDelete(id);

  res.send(result);
});

export default router;