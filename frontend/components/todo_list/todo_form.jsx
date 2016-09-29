import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo({todo}); // put todo into object
    this.setState({title: "", body: ""}); // reset form
  }

  render() {
    return(
      <form className="todo-form"
            onSubmit={this.handleSubmit}>
            <label>Title:
            <input className="input"
                    value={this.state.title}
                    placeholder="Do the laundry..."
                    onChange={(e) => this.setState({title: e.target.value})}
                    required />

            </label>
            <label>Body:
            <textarea className="input"
                      cols="20"
                      value={this.state.body}
                      rows="5"
                      onChange={e => this.setState({body: e.target.value})}
                      required></textarea>
            </label>
            <button className="create-btn">Create Todo!</button>
      </form>
    );
  }
};

export default TodoForm;
