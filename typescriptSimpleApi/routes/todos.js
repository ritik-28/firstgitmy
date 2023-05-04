"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Router } from "express";
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ newTodo: newTodo });
});
router.post("/delete", (req, res, next) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == req.body.id) {
            todos.splice(i, 1);
            res.status(201).json(todos);
        }
    }
    res.status(404).json("id is not found");
});
router.post("/edit", (req, res, next) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == req.body.id) {
            todos[i].text = req.body.text;
            res.status(201).json(todos);
        }
    }
    res.status(404).json("id is not found");
});
exports.default = router;
