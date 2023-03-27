import React from "react";
import "./Header.css";

class Header extends React.Component {

    render() {
        const { handlePage } = this.props;
        return (
            <div className="nav">
                <div>Header</div>
                <div className="page" onClick={() => handlePage("Dashboard")}>Dashboard</div>
                <div className="page" onClick={() => handlePage("TodoList")}>TodoList</div>
            </div>
        )
    }
}

export default Header;