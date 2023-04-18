import React, { useState } from "react";
import ListRender from "../components/TodoList/ListRender";
import NewItem from "../components/TodoList/NewItem";

function TodoList() {
  const [messages, setMassages] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      data = data.slice(0, 10).map((e) => e.body.slice(0, 10));
      setMassages(data);
    })
    .catch((err) => console.log(err));

  return (
    <>
      <ListRender messages={messages} setMessages={setMassages} />
      <NewItem list={messages} setList={setMassages} />
    </>
  );
}

export default TodoList;
