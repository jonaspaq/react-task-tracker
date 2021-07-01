import React from "react";
import '../../css/components/molecules/TaskList.css'
import RemoveButton from '../atoms/RemoveButton'

export default class TaskList extends React.Component {
    render() {
        return <ul className="list-group list-group-flush mt-4">
            {this.props.taskList.map((task) => 
            <li className="list-group-item" key={task.id}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> {task.title} 
                <RemoveButton />
            </li>
            )}
        </ul>
    }
}