import React from "react";

const FormTodo = props => {
    const [description, setDesciption] = React.useState("");

    return (
        <div>
            <form action="">
                <div className="todo-list">
                    <div className="input">
                        <input type="text" placeholder="Add a new task" value={description} onChange={e => setDesciption (e.target.value)}/>
                        <button className="button-blue" disabled={description ? "": "disabled"}>Agregar tarea</button>
                    </div>
                    </div>
            </form>
        </div>
    );
}

export default FormTodo;