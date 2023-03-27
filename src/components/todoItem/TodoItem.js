import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
    state = {
        inputValue: this.props.todo.content
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        const { todo, handleDelete, handleComplete, isEdit, handleEdit, handleSave } = this.props;
        return (
            <li className="todoitem">
                {
                    isEdit
                        ? <input
                            value={this.state.inputValue}
                            onChange={this.handleChange}></input>
                        : <span>{todo.content}</span>
                }
                <div className="todoitem-buttons">
                    {
                        isEdit
                            ? <button onClick={() => handleSave(
                                { ...todo, content: this.state.inputValue })}>save</button>
                            : <button onClick={() => handleEdit(todo.id)}>edit</button>
                    }
                    <button onClick={() => handleDelete(todo)}>delete</button>
                    <button onClick={() => handleComplete({ ...todo, completed: !todo.completed })}>
                        {todo.completed ? "pending" : "complete"}
                    </button>
                </div>
            </li>
        )
    }
}

export default TodoItem;