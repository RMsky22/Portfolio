// To do list needs to do the things i need
// 1. a way to type a new item
// 2. a way to read that new item (string) and put it in an array
// 3. a way to list out that array
// 4. a way to rearrange items
// 5. a way to delete items from that array

//Arrow Functions are used multiple times in this

//imports the useState Hook from react.
// useState accepts an initial state

// returns two values:
// The current state.
// A function that updates the state.

//import { useState } from "react";
// function FavoriteColor() {
// const [color, setColor] = useState("");}
import { useState, useEffect } from "react";

//a function that holds an array in a value/type that can not be changed ie. a string
function ToDoList() {
  //tasks is an array of strings
  //setTasks is a setter function used to dynamically update tasks
  //useState to update the tasks
  const [tasks, setTasks] = useState(() => {
    // Load saved tasks from localStorage when component starts
    const savedTasks = localStorage.getItem("todoTasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return [
      // "Eat Breakfast",
      // "Take a shower",
      // "Walk the cats",
    ];
  });

  // a state variable called newTask that will be the input for the user a text box
  const [newTask, setNewTask] = useState("");

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(event) {
    //changes the text
    setNewTask(event.target.value);
  }
  //adds tasks into the task array if the inputfield is not empty
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-list-container">
      <h1>📝 To Do List</h1>
      <div className="input-section">
        <input
          //an input that becomes the newTask variable
          //uses the onChange function to dynamically update the input newTask and show that to the user
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          className="todo-input"
        />

        {/* button that runs the function addTask when clicked */}
        <button className="add-button" onClick={addTask}>
          + Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <p>✨ No tasks yet. Add one above!</p>
        </div>
      ) : (
        <ol className="tasks-list">
          {/* dynamic variable that lists the tasks inside the array task in order of its index location inside a list item element <li> */}
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-number">{index + 1}.</span>
              <span className="task-text"> {task} </span>
              <div className="task-actions">
                <button className="up-button" onClick={() => moveTaskUp(index)}>
                  ↑
                </button>
                <button
                  className="down-button"
                  onClick={() => moveTaskDown(index)}
                >
                  ↓
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(index)}
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ol>
      )}

      {tasks.length > 0 && (
        <div className="todo-stats">
          <span>Total tasks: {tasks.length}</span>
          <button className="clear-all-btn" onClick={() => setTasks([])}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}

export default ToDoList;
