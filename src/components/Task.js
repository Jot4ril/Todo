import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addTasks,
  completeTasks,
  removeTasks,
  updateTasks,
} from '../redux/reducer';
import { GoPlus } from 'react-icons/go';

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTasks(obj)),
    removeTask: (id) => dispatch(removeTasks(id)),
    updateTask: (obj) => dispatch(updateTasks(obj)),
    completeTask: (obj) => dispatch(completeTasks(obj)),
  };
};

const Tasks = (props) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  //console.log('props from store', props);
  return (
    <div className="addTask">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="task-input"
      />

      <button
        className="add-btn"
        onClick={() =>
          props.addTask({
            id: Math.floor(Math.random() * 10000),
            item: task,
            completed: false,
          })
        }
      >
        <GoPlus />
      </button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
