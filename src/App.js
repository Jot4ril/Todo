import './css/main.css';
import './App.css';
import Task from './components/Task';
import DisplayTasks from './components/DisplayTasks';
function App() {
  return (
    <div className="App">
      <h1>Task Scheduling App</h1>
      <Task />
      <DisplayTasks />
    </div>
  );
}

export default App;
