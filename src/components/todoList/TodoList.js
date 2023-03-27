import React from "react";
import TodoItem from "../todoItem/TodoItem";
import "./TodoList.css";
import { withTodos } from "../../hoc/withTodos";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            isEdit: null
        }
    }

    handleInputChange = (e) => {
        this.setState({ inputText: e.target.value })
    }

    handleSubmit = () => {
        this.props.handleTodoCreate({content: this.state.inputText, completed: false});
        this.setState({
            inputText: ""
        })
    }

    handleDelete = (targetTodo) => {
        this.props.handleTodoDelete(targetTodo);
    }

    handleComplete = (targetTodo) => {
        this.props.handleTodoUpdate(targetTodo);
    }

    handleEdit = (id) => {
        this.setState({
            isEdit: id
        });
    }

    handleSave = (targetTodo) => {
        this.props.handleTodoUpdate(targetTodo);
        this.setState({
            isEdit: null
        });
    }

    render() {
        const { todos } = this.props;
        return (
            <div className="todolist">
                <h1>TodoList</h1>
                <div className="todolist-input">
                    <input className="input" onChange={this.handleInputChange} value={this.state.inputText} />
                    <button className="btn submit-btn" onClick={this.handleSubmit}>submit</button>
                </div>
                <div className="todolist-lists">
                    <ul className="todolist-list">
                        <h4>Pending</h4>
                        {todos.filter((todo) => todo.completed === false).map((todo) =>
                            <TodoItem key={todo.id} todo={todo}
                                isEdit={todo.id === this.state.isEdit}
                                handleDelete={this.handleDelete}
                                handleComplete={this.handleComplete}
                                handleEdit={this.handleEdit}
                                handleSave={this.handleSave} />
                        )}
                    </ul>
                    <ul className="todolist-list">
                        <h4>Completed</h4>
                        {todos.filter((todo) => todo.completed === true).map((todo) =>
                            <TodoItem key={todo.id} todo={todo}
                                isEdit={todo.id === this.state.isEdit}
                                handleDelete={this.handleDelete}
                                handleComplete={this.handleComplete}
                                handleEdit={this.handleEdit}
                                handleSave={this.handleSave} />
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default withTodos(TodoList);