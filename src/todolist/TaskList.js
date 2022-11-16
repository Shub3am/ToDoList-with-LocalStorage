import React from "react";
import "./Task.css";
const List = ({ List, MarkTask, RemoveTask }) => {
  const Tasks = List.map((Task, Index) => {
    return (
      <div key={Index}>
        <div className="Task">
          <h1 className={Task.Marked ? "MarkTask" : null}>{Task.Task}</h1>
          <button> Edit</button>
          <button onClick={() => MarkTask(Index)}> Mark</button>
          <button onClick={() => RemoveTask(Index)}>Remove</button>
        </div>
        {/*EditMode.Mode
          ? EditMode.key ==
            Task.key(
              <div className="Editor">
                <input placeholder="Edit" type="text" />
                <input type="button" value="Change" />
              </div>
            )
          : null*/}
      </div>
    );
  });
  return <div>{Tasks}</div>;
};

export default List;
