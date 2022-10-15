import React, { useRef } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoCheckmarkDoneSharp, IoClose } from 'react-icons/io5';

export const TaskItem = (props) => {
  const { item, updateTask, removeTask, completeTask } = props;
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //13 is key code for enter key
      updateTask({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li key={item.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button onClick={() => changeFocus()}>
          <AiFillEdit />
        </button>
        <button onClick={() => completeTask(item.id)}>
          <IoCheckmarkDoneSharp />
        </button>
        <button onClick={() => removeTask(item.id)}>
          <IoClose />
        </button>{' '}
        {''}
      </div>
      {item.completed && <span className="completed">Done</span>}
    </li>
  );
};
export default TaskItem;
