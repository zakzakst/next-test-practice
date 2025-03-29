"use client";

import { useState } from "react";
import type { Todo } from "@/types/Todo";

const url = "https://jsonplaceholder.typicode.com/todos/1";

export const TestComponent = () => {
  const [clickNum, setClickNum] = useState<number>(0);
  const [todo, setTodo] = useState<Todo | null>(null);

  const onClick = () => {
    setClickNum(clickNum + 1);
    const fetchTodo = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const json: Todo = await res.json();
        setTodo(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTodo();
  };

  return (
    <div>
      <p>Test Component: {clickNum}</p>
      <p>
        <button onClick={onClick}>ボタン</button>
      </p>
      {todo && <div>{todo.title}</div>}
    </div>
  );
};
