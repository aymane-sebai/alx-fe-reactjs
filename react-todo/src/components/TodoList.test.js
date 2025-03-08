// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const todoInput = screen.getByPlaceholderText("Add a todo...");
  const addButton = screen.getByText("Add");

  fireEvent.change(todoInput, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("Delete")[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
