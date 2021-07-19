import React from 'react';
import '../css/App.css';
import AddTaskInput from './atoms/AddTaskInput';
import Logo from './atoms/Logo'
import TaskList from './molecules/TaskList';
import Paragraph from './atoms/Paragraph'

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const dayToday = new Date().getDay()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: [
        {
          id: 1,
          title: 'Feed the elephants'
        },
        {
          id: 2,
          title: 'Cook lechon for midnight snacks',
        }
      ],
    }
    this.onTaskInputSubmit = this.onTaskInputSubmit.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(data => this.setState({taskList: data}));
  // }

  // Methods
  onTaskInputSubmit(value) {
    if (!value.length) {
      alert ("Please input a task.")
      return;
    }

    this.setState({
      taskList: [...this.state.taskList, {
        id: this.state.taskList.length + 1,
        title: value,
      }]
    })
  }

  removeTask(task) {
    window.confirm (`Are you sure you want to remove this task?`)
    const taskIndex = this.state.taskList.indexOf(task);
    let taskList = [...this.state.taskList]
    taskList.splice(taskIndex, 1)

    this.setState({
      taskList: taskList
    })
  }

  render() {
    let taskInterface = <Paragraph text="You have no tasks." />;
    if(this.state.taskList.length !== 0) {
      taskInterface = <TaskList taskList={this.state.taskList} onRemoveTask={this.removeTask} />;
    }

    return (
      <div className="container py-3">
        <Logo />
        <h3 className="text-light text-center mt-3">Enjoy your {days[dayToday]} 😊☕</h3>
        
        <div className="card col-lg-5 mx-auto mt-5 rounded px-3 py-3 shadow-lg">
          <AddTaskInput inputValue={this.newTaskInput} onInputSubmit={this.onTaskInputSubmit} className="mb-3 mt-4" />
      
          {taskInterface}
        </div>
      </div>
    );
  }
}

export default App;
