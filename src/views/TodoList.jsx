import React, { useState } from "react";
import ListRender from "../components/TodoList/ListRender";
import NewItem from "../components/TodoList/NewItem";

function TodoList() {
  const [messages, setMassages] = useState([
    "asdfaf",
    "fsadf",
    "fasdfs",
    "fasdfs",
    "fasdfs",
    "fasdfs",
    "dsffasd"
  ]);

  return (
    <>
      <ListRender messages={messages} setMessages={setMassages} />
      <NewItem list={messages} setList={setMassages} />
    </>
  );
}

export default TodoList;
