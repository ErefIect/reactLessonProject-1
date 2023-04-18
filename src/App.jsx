import { useState } from "react";
import Test from "./components/Test";

import "./App.css";
import ListRender from "./components/TodoList/ListRender";
import TodoList from './views/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
