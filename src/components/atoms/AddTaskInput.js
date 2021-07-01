
export default function AddTaskINput(props) {
    return (
        <div className={`input-group shadow-sm ${props.className}`} >
          <input type="text" className="form-control" placeholder="Make breakfast" />
          <button className="btn btn-dark" type="button" id="button-addon2">Add task</button>
        </div>
    )
}