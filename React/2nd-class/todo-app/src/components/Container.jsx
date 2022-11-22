import React from "react";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = () => {
    return (
        <div>
            <h1>Container</h1>
            <FormTodo />
            <TaskList />
        </div>
    );
}

export default Container;