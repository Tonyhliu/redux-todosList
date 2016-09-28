import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
  }

  handleSubmit() {
    // debugger
    console.log("hits submit");
    return (e) => {
      e.preventDefault();
      const todo = Object.assign({}, this.state);
      this.props.createTodo({todo}); // put todo into object
      this.setState({title: "", body: ""}); // reset form
    }
  }

  render() {
    return(
      <form className="todo-form"
            onSubmit={this.handleSubmit()}>
            <label>Title:
            <input className="input"
                    value={this.state.title}
                    placeholder="Do the laundry..."
                    onChange={this.update("title")}
                    required />

            </label>
            <label>Body:
            <textarea className="input"
                      cols="20"
                      value={this.state.body}
                      rows="5"
                      onChange={this.update("body")}
                      required></textarea>
            </label>
            <button className="create-btn">Create Todo!</button>
      </form>
    );
  }
};

export default TodoForm;
