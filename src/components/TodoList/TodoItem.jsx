import { useCallback } from "react";
import "./TodoItem.css";

function TodoItem({ index, items, setMessages, contents }) {

  const deleteItem = useCallback(() => {
    const newItems = items.filter((item, i) => i !== index);
    setMessages(newItems);
  }, [index, items, setMessages]);

  return (
    <div className="todo-item">
      <div>{contents}</div>
      <button className="del-btn" onClick={deleteItem}>
        del
      </button>
    </div>
  );
}

export default TodoItem;
