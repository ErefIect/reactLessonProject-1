import React from "react";
import TodoItem from "./TodoItem";
import "./ListRender.css";

function ListRender({ messages, setMessages }) {
  return (
    <>
      <h3 className="todo-list-title">List</h3>
      <ul className="todo-list">
        {messages.map((e, id) => {
          return (
            <TodoItem
              key={id}
              index={id}
              items={messages}
              setMessages={setMessages}
              contents={e}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ListRender;
