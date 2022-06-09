import { all } from "bluebird";
import React, { Component } from "react";
import Todo from "./Todo";
import ViewTodo from "./ViewTodo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        newTodo: "",
        priority: "0",
        color: "",
        editEnabled: false,
        strikeThrough: false,
      },
      allTodos: [],
      showTodos: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.viewTodo = this.viewTodo.bind(this);
    this.saveChange = this.saveChange.bind(this);
  }

  onChange(e) {
    let todoClone = JSON.parse(JSON.stringify(this.state.todo));
    todoClone[e.target.name] = e.target.value;
    console.log(todoClone);
    this.setState({ todo: todoClone });
  }

  saveChange(e, i) {
    let allTodosClone = [...this.state.allTodos];
    allTodosClone[i][e.target.name] = e.target.value;
    this.setState({ allTdos: allTodosClone });
  }

  handleCheck(e, i) {
    let allTodosClone = [...this.state.allTodos];
    allTodosClone[i]["strikeThrough"] = e.target.checked;
    console.log(allTodosClone);
    console.log(e.target.checked, i);
    this.setState({
      allTodos: allTodosClone,
    });
  }

  removeTodo(i) {
    let allTodosClone = [...this.state.allTodos];
    allTodosClone.splice(i, 1);
    this.setState({
      allTodos: allTodosClone,
    });
  }

  viewTodo(i) {
    let allTodosClone = [...this.state.allTodos];
    allTodosClone[i].editEnabled = !allTodosClone[i].editEnabled;
    this.setState({
      allTodos: allTodosClone,
    });
  }

  handleClick() {
    const priority = this.state.todo.priority;

    let color =
      priority == "1"
        ? "list-group-item-success"
        : priority == "2"
        ? "list-group-item-warning"
        : "list-group-item-danger";

    let todoClone = JSON.parse(JSON.stringify(this.state.todo));
    todoClone["color"] = color;

    let newArr = this.state.allTodos.concat(todoClone);
    this.setState({
      allTodos: newArr,
      todo: {
        newTodo: "",
        priority: "0",
        color: "",
        editEnabled: false,
        strikeThrough: false,
      },
      showTodos: true,
    });
  }

  render() {
    return (
      <div className="container main-thing">
        <div className="title">
          <h1 id="heading">Very Simple To Do App</h1>
          <h4>
            Track <i>all</i> of the things
          </h4>
          <hr />
        </div>

        <div className="row">
          <div className="container col-4" id="addToDo">
            <h4 id="want">I want to...</h4>
            <textarea
              cols="30"
              rows="10"
              name="newTodo"
              className="create-todo-text"
              onChange={this.onChange}
              value={this.state.todo.newTodo}
            ></textarea>
            <h5>How much of a priority is this?</h5>
            <select
              className="create-todo-priority"
              name="priority"
              onChange={this.onChange}
              value={this.state.todo.priority}
            >
              <option selected disabled>
                Select a Priority
              </option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
            <button className="create-todo" onClick={() => this.handleClick()}>
              Save
            </button>
          </div>

          <div className="container col-8" id="todo-list">
            {this.state.showTodos ? (
              <div>
                <h4>ToDo Items</h4>
                <h4 id="todos-phrase">Let's Get Some Things Done!</h4>
                <h4>
                  To prioritize task by importance, press{" "}
                  <button id="sort">Sort</button>.
                </h4>
                <hr />
                <ul className="list-group">
                  {this.state.allTodos.map((todo, i) => (
                    <Todo
                      Todo={todo}
                      removeTodo={this.removeTodo}
                      i={i}
                      key={i}
                      handleCheck={this.handleCheck}
                      viewTodo={this.viewTodo}
                      saveChange={this.saveChange}
                    />
                  ))}
                </ul>
              </div>
            ) : (
              <div id="welcome-phrase-div">
                <h4>ToDo Items</h4>
                <h5 id="welcome-phrase">Welcome to Very Simple Todo App!</h5>
                <h5>Get started now by adding a new todo on the left.</h5>
                <hr />
              </div>
            )}
            {this.state.editEnabled ? (
              <div className="div"></div>
            ) : (
              <div className="div"></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
