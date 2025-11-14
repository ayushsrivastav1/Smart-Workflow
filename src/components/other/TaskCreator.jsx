import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

function TaskCreator() {
  const [allEmployees, setAllEmployees] = useContext(AuthContext);

  // form states
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // make new task object directly
    const task = {
      taskTitle: title,
      taskDescription: desc,
      taskDate: date,
      category: category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // copy employees data
    const updatedEmployees = [...allEmployees];

    updatedEmployees.forEach((emp) => {
      if (emp.firstName === assignTo) {
        emp.tasks.push(task);
        emp.taskCounts.newTask += 1;
      }
    });

    setAllEmployees(updatedEmployees);

    // reset form
    setTitle("");
    setDesc("");
    setDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-[#2A1E4D] mt-5 rounded-lg">

      <form onSubmit={handleSubmit} className="flex flex-wrap gap-5">

        {/* LEFT SECTION */}
        <div className="w-full sm:w-1/2">
          <label className="block text-sm text-gray-300">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Build UI"
            className="w-full sm:w-4/5 mb-3 p-2 rounded bg-transparent border border-gray-500 text-sm"
          />

          <label className="block text-sm text-gray-300">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full sm:w-4/5 mb-3 p-2 rounded bg-transparent border border-gray-500 text-sm"
          />

          <label className="block text-sm text-gray-300">Assign To</label>
          <input
            type="text"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            placeholder="employee name"
            className="w-full sm:w-4/5 mb-3 p-2 rounded bg-transparent border border-gray-500 text-sm"
          />

          <label className="block text-sm text-gray-300">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="design, dev etc"
            className="w-full sm:w-4/5 mb-3 p-2 rounded bg-transparent border border-gray-500 text-sm"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full sm:w-2/5">
          <label className="block text-sm text-gray-300">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full h-47 p-2 rounded bg-transparent border border-gray-400 text-sm"
          />

          <button className="w-full mt-4 bg-[#6C63FF] hover:bg-[#A78BFA] py-2 rounded text-white text-sm shadow-md transition-colors duration-200">
            Create Task
          </button>
        </div>

      </form>
    </div>

  );
}

export default TaskCreator;
