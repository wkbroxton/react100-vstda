import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 id="heading" className="title">
          Very Simple To Do App
        </h1>
        <h4>Track all of the things</h4>
        <hr />
        <div className="container" id="addToDo">
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="create-todo-text"
              ></textarea>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
