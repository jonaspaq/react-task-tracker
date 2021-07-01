import React from "react";

export default class TaskList extends React.Component {
    render() {
        return <ul className="list-group list-group-flush mt-4">
            {this.props.taskList.map((task) => 
            <li className="list-group-item" ><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> {task.title}</li>
            )}
        </ul>
    }
}