import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((tasks, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold mb-8 text-center">My To-Do App</h1>

      {/* Input */}
      <div className="flex gap-2 w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-grow px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
        >
          Add
        </button>
      </div>

      {/* Tasks */}
      <div className="w-full max-w-md space-y-3">
        {tasks.map((t, index) => (
          <div
            key={index}
            className="bg-gray-800 flex justify-between items-center px-4 py-3 rounded shadow"
          >
            <span className="text-lg">{t}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
