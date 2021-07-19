import React from "react";
import '../../css/components/molecules/TaskList.css'
import RemoveButton from '../atoms/RemoveButton'

export default class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.onRemoveTask = this.onRemoveTask.bind(this);
    }

    onRemoveTask(taskId) {
        this.props.onRemoveTask(taskId)
    }

    render() {
        return <ul className="list-group list-group-flush mt-4">
            {this.props.taskList.map((task) => 
            <li className="list-group-item d-flex" key={task.id}>
                <input className="form-check-input" type="checkbox" value="" id={`flexCheckDefault${task.id}`} /> 
                <label className="ms-1" htmlFor={`flexCheckDefault${task.id}`}> {task.title} </label> 

                <RemoveButton className="ms-auto" onClick={this.onRemoveTask.bind(this, task)} />
            </li>
            )}
        </ul>
    }
}