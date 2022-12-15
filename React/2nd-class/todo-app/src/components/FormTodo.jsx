import React from "react";

const FormTodo = (props) => {
  const [description, setDesciption] = React.useState("");

  const { addItem } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(description);

    addItem({
      done: false,
      id: new Date().toString(),
      description,
    });

    setDesciption("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="input">
          <input
            type="text"
            className="text"
            placeholder="Add a new task"
            value={description}
            onChange={(e) => setDesciption(e.target.value)}
          />
          <button
            className="button withe"
            disabled={description ? "" : "disabled"}
          >
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
