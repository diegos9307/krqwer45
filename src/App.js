import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false },
      ],
      newTask: "",
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleKeyUp(e) {
    this.setState({
      newTask: e.target.value,
    });
    if (e.target.value === "" && e.key === "Enter") {
      let $input = document.getElementById("new-task");
      $input.className = "error";
    } else {
      let $input = document.getElementById("new-task");
      $input.removeAttribute("class");
      if (e.key === "Enter") {
        let $capture = document.querySelector(".todo"),
          $create = document.createElement("li");
        $create.textContent = `${this.state.newTask}`;
        $capture.appendChild($create);
        e.target.value = null;
      }
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => (
              <li key={task.id}>{task.name}</li>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              defaultValue={this.state.newTask}
              onKeyUp={this.handleKeyUp}
            />
          </form>
        </div>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
  }
}

export default App;
