import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoList from "./components/todoList/TodoList";
import Header from "./components/header/Header";
import Dashboard from './components/dashboard/Dashboard';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "TodoList"
        }
    }

    handlePage = (newPage) => {
        this.setState({ currentPage: newPage });
    }

    render() {
        return (
            <>
                <header><Header handlePage={this.handlePage} /></header>
                <main>
                    {
                        this.state.currentPage == "TodoList"
                            ? <TodoList />
                            : <Dashboard />
                    }
                </main>
            </>
        )
    }
}

export default App;
