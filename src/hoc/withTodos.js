import React from "react";
import { getTodos, createTodo, deleteTodo, updateTodo } from "../apis/TodoApis";

const withTodos = (InnerComponent) => {
    return class WrappedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                todos: []
            }
        }

        handleTodoCreate = (newTodo) => {
            createTodo(newTodo).then((createdTodo) => {
                this.setState((prev) => {
                    return {
                        todos: [...prev.todos, createdTodo],
                    }
                })
            });
        }

        handleTodoDelete = (targetTodo) => {
            deleteTodo(targetTodo.id).then(() => {
                this.setState((prev) => {
                    return {
                        todos: prev.todos.filter(todo => todo.id !== targetTodo.id)
                    }
                })
            })
        }

        handleTodoUpdate = (targetTodo) => {
            updateTodo(targetTodo).then((updatedTodo) => {
                this.setState((prev) => {
                    return {
                        todos: prev.todos.map((todo) => {
                            if (todo.id === updatedTodo.id) return updatedTodo;
                            return todo;
                        })
                    }
                })
            })
        }

        render() {
            return <InnerComponent
                todos={this.state.todos}
                handleTodoCreate={this.handleTodoCreate}
                handleTodoDelete={this.handleTodoDelete}
                handleTodoUpdate={this.handleTodoUpdate}
            />;
        }

        componentDidMount() {
            getTodos().then((todos) => {
                this.setState({ todos: todos })
            })
        }
    }
}


export { withTodos };