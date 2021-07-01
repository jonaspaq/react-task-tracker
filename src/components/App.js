import React from 'react';
import '../css/App.css';
import AddTaskInput from './atoms/AddTaskInput';
import Logo from './atoms/Logo'
import TaskList from './molecules/TaskList';

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const dayToday = new Date().getDay()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => this.setState({taskList: data}));
  }

  render() {
    return (
      <div className="container py-3">
        <Logo />
        <h3 className="text-light text-center mt-3">Enjoy your {days[dayToday]} 😊☕</h3>
        
        <div className="card col-lg-5 mx-auto mt-5 rounded px-3 py-3 shadow-lg">
          <AddTaskInput className="mb-3 mt-4" />
  
          <TaskList taskList={this.state.taskList} />
        </div>
      </div>
    );
  }
}

export default App;
