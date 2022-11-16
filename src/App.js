import React, { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./todolist/TaskList";
localStorage.tasks === undefined
  ? localStorage.setItem("tasks", JSON.stringify([]))
  : console.log("Tasks Exists!");

function App() {
  const [List, SetList] = useState(JSON.parse(localStorage.tasks)); //Taking Tasks From LocalStorage
  const [New_Task, SetNew] = useState("");

  //Updating LocalStorage Everytime it detects changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(List));
  }, [List]);

  // Adding New Task
  const New_Task_Value = (evt) => SetNew(evt.target.value); //Getting Values from Input Box and Saving it to New_Task State
  const Add_New_Task = () => {
    const Task_Template = {
      Task: String(New_Task),
      Marked: false,
    };
    SetList([...List, Task_Template]);
  };

  //Adding Task Ends

  //Marking Task
  const MarkTask = (key) => {
    const LocalList = [...List];
    LocalList[key].Marked
      ? (LocalList[key].Marked = false)
      : (LocalList[key].Marked = true);
    SetList(LocalList);
  };

  //Removing Task
  const RemoveTask = (key) => {
    const LocalList = List.filter((Task, Index) => Index !== key); //Checking If Index matches, Filter that Item
    SetList(LocalList);
  };
  //Removing Task Ends

  return (
    <div>
      <div className="Header">
        <h1>ToDo List</h1>
      </div>
      <div className="Task-Form">
        <h3>Add a Task: </h3>
        <input
          type="text"
          onChange={New_Task_Value}
          id="task-input"
          placeholder="Add A Task"
        />
        <input onClick={Add_New_Task} type="button" value="Submit" />
      </div>
      <div>
        <TaskList List={List} MarkTask={MarkTask} RemoveTask={RemoveTask} />
      </div>
    </div>
  );
}

export default App;
