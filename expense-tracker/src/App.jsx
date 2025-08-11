import { useState, useRef, useCallback } from "react";

import "./App.css";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  const addExpense = useCallback(
    (e) => {
      e.preventDefault();

      if (!amount || !desc) return;

      const newExpense = {
        id: Date.now(),
        amount: Number(amount),
        desc,
      };

      setExpenses((prev) => [...prev, newExpense]);
      setAmount("");
      setDesc("");
    },
    [amount, desc]
  );

  const deleteExpense = useCallback((id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>

      {/* Form only for adding */}
      <form onSubmit={addExpense} className="flex gap-2 mb-4">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Amount"
          className="border rounded-lg px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Description"
          className="border rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit" // only submit via form
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </form>

      {/* List outside form */}
      <ul className="space-y-2">
        {expenses.map((exp) => (
          <li
            key={exp.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
          >
            <span className="font-medium">
              ₹{exp.amount} - {exp.desc}
            </span>
            <button
              type="button"
              onClick={() => deleteExpense(exp.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Total */}
      <div className="mt-4 text-lg font-semibold text-right">
        Total: ₹{expenses.reduce((total, e) => total + e.amount, 0)}
      </div>
    </div>
  );
}
