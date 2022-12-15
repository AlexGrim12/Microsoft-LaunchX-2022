import React from "react";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";
import { useState } from "react";

const Container = () => {
  const [list, setList] = useState([]);
  const addItem = (addItem) => {
    setList([...list, addItem]);
  };

  return (
    <div>
      <FormTodo addItem={addItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;
