
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      todoList: [],
      editMode: false,
      editIndex: -1,
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, todoList, editMode, editIndex } = this.state;
    if (editMode) {
      const newList = [...todoList];
      newList[editIndex] = { title, description };
      this.setState({
        todoList: newList,
        title: '',
        description: '',
        editMode: false,
        editIndex: -1,
      });
    } else {
      this.setState({
        todoList: [...todoList, { title, description }],
        title: '',
        description: '',
      });
    }
  };

  handleEdit = (index) => {
    const { todoList } = this.state;
    const { title, description } = todoList[index];
    this.setState({
      title,
      description,
      editMode: true,
      editIndex: index,
    });
  };

  handleDelete = (index) => {
    const { todoList } = this.state;
    const newList = [...todoList];
    newList.splice(index, 1);
    this.setState({ todoList: newList });
  };

  handleClearAll = () => {
    this.setState({ todoList: [] });
  };

  handleReset = () => {
    this.setState({ title: '', description: '' });
  };

  render() {
    const { title, description, todoList, editMode } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleTitleChange}
            class="form-control"
          />
          </div>
          <br />

          <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={this.handleDescriptionChange}class="form-control"  rows="2"
          />





          <br />
          </div>
          <div className="button-group">
          <button    class="btn btn-primary" type="submit">{editMode ? 'Update' : 'Add'}</button>
          <button class="btn btn-danger" type="button" onClick={this.handleReset}>
            Reset
          </button>
          </div>
        </form>
        <hr />
        {todoList.length === 0 ? (
          <p>No items</p>
        ) : (
          <ul class="list-group  list-group-flush ">
                      {todoList.map((item, index) => (
                            <li class="list-group-item list-group-item-info" key={index}>
                <div className="todo-title">{item.title}</div>
                <div className="todo-description">{item.description}</div>
                <div className="todo-button-group">
                  <button className="btn btn-primary" onClick={() => this.handleEdit(index)}>
                    Edit
                  </button>
                  <button className="btn btn-secondary" onClick={() => this.handleDelete(index)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}

          </ul>
        )}
        {todoList.length > 0 && (
          <button class="btn btn-outline-danger" type="button" onClick={this.handleClearAll}>
            Clear All
          </button>
        )}
      </div>
    );
  }
}

export default App;



// import * as React from 'react';import Form from './ToDoList';


// class App extends React.Component {
//   render() {
//     //render single App component
//     return (
//       <div id='first'>
//         <Form />

//       </div>
//     )
//   }
// }

// export default App