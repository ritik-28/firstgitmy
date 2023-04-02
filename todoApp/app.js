const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const sequelize = require("./model/database");
const Todo = require("./model/todo");
const Done = require("./model/done");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/posttodo", async (req, res, next) => {
  try {
    const todoname = req.body.todoname;
    const description = req.body.description;
    console.log(req.body);
    console.log(todoname, description);
    if (todoname == "" || description == "") {
      res.status(400).json({ error: "please fill all fields" });
    } else {
      const data = await Todo.create({
        todoname,
        description,
      });
      res.json(data);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.post("/donetodo", async (req, res, next) => {
  try {
    const doneTask = req.body.todoname;
    const description = req.body.description;
    console.log(req.body);
    console.log(doneTask, description);
    if (doneTask == "" || description == "") {
      res.status(400).json({ error: "please fill all fields" });
    } else {
      const data = await Done.create({
        doneTask,
        description,
      });
      res.json(data);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.get("/donetodo", async (req, res, next) => {
  try {
    const data = await Done.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.get("/gettodo", async (req, res, next) => {
  try {
    const data = await Todo.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.delete("/deletetodo/:id", async (req, res, next) => {
  try {
    if (req.params.id == "undefined") {
      res.status(400).json({ err: "id is missing" });
    } else {
      const id = req.params.id;
      await Todo.destroy({ where: { id: id } });
      res.sendStatus(200);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => console.log(err));

app.listen(3000, () => console.log("server is running on port 3000"));
