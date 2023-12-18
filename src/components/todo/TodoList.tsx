"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const TodoList = () => {
  const [todoItem, setTodoItem] = useState("");

  const handleAddTodo = async () => {
    const response = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({ todoItem }),
    });
    const res = await response.json();
    console.log(res);

    // getTodo();
  };
  return (
    <div className="flex justify-center items-center h-full w-full mt-16">
      <div className="w-[60%] bg-gray-200 shadow-md rounded-md p-7">
        <div className="flex justify-center items-end gap-2">
          <div className="w-[70%]">
            <Input
              id="todoItem"
              placeholder="please enter a todo"
              value={todoItem}
              onChange={(e) => setTodoItem(e.target.value)}
            />
          </div>
          <Button onClick={handleAddTodo}>
            <Plus size={18} />
            Add Todo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
