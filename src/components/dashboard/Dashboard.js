import React from "react";
import "./Dashboard.css";
import { withTodos } from "../../hoc/withTodos";

class Dashboard extends React.Component {
    render() {
        const { todos } = this.props;
        return (
            <div className="dashboard">
                <div className="title">Dashboard</div>
                <div>Total Todos: {todos.length}</div>
                <div>Total Pending Todos: {todos.filter(todo => todo.completed === false).length}</div>
                <div>Total Completed Todos: {todos.filter(todo => todo.completed === true).length}</div>
            </div>
        )
    }
}

export default withTodos(Dashboard);