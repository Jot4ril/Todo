import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addTasks,
  completeTasks,
  removeTasks,
  updateTasks,
} from '../redux/reducer';
import TaskItem from './TaskItem';

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

const DisplayTasks = (props) => {
  const [sort, setSort] = useState('active');
  return (
    <div className="displaytasks">
      <div className="buttons">
        <button onClick={() => setSort('active')}>Active</button>
        <button onClick={() => setSort('completed')}>Complete</button>
        <button onClick={() => setSort('all')}>All</button>
      </div>
      <ul>
        {props.tasks.length > 0 && sort === 'active'
          ? props.tasks.map((item) => {
              return (
                item.completed === false && (
                  <TaskItem
                    key={item.id}
                    item={item}
                    removeTask={props.removeTask}
                    updateTask={props.updateTask}
                    completeTask={props.completeTask}
                  />
                )
              );
            })
          : null}
        {/* for completed items */}
        {props.tasks.length > 0 && sort === 'completed'
          ? props.tasks.map((item) => {
              return (
                item.completed === false && (
                  <TaskItem
                    key={item.id}
                    item={item}
                    removeTask={props.removeTask}
                    updateTask={props.updateTask}
                    completeTask={props.completeTask}
                  />
                )
              );
            })
          : null}
        {/* for all items */}
        {props.tasks.length > 0 && sort === 'all'
          ? props.tasks.map((item) => {
              return (
                <TaskItem
                  key={item.id}
                  item={item}
                  removeTask={props.removeTask}
                  updateTask={props.updateTask}
                  completeTask={props.completeTask}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTasks);
