// import { Router } from "express";
import express from "express";
import { Todo } from "../model/todo";

const router = express.Router();

//write this when you use controllers
type RequestBody = { text: string };
type RequestParams = { id: string };

const todos: Todo[] = [];
router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
  // const body = req.body as {text : string}
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.RequestBody,
    // text: req.body.text,
  };
  todos.push(newTodo);
  res.status(201).json({ newTodo: newTodo });
});

router.post("/delete", (req, res, next) => {
  for (let i = 0; i < todos.length; i++) {
    // req.body.RequestParams
    if (todos[i].id == req.body.id) {
      todos.splice(i, 1);
      return res.status(201).json(todos);
    }
  }
  res.status(404).json("id is not found");
});

router.post("/edit", (req, res, next) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == req.body.id) {
      todos[i].text = req.body.text;
      return res.status(201).json(todos);
    }
  }
  res.status(404).json("id is not found");
});

export default router;
