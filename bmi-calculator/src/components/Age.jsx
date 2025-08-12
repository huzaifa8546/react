import { useState } from "react";
import "../App.css";

export default function Age() {
  const [dob, setDOB] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const calculateAge = () => {
    if (!dob) {
      setError("Please select your date of birth.");
      setAge("");
      return;
    }

    const today = new Date();
    const birthDate = new Date(dob);

    if (birthDate > today) {
      setError("Future dates are not valid.");
      setAge("");
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge(`You are ${years} years, ${months} months, and ${days} days old.`);
    setError("");
  };

  return (
    <div class="max-w-sm mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h1 class="text-2xl font-bold text-center mb-4">Age Calculator</h1>

      <input
        type="date"
        onChange={(e) => setDOB(e.target.value)}
        value={dob}
        class="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <button
        onClick={calculateAge}
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
      >
        Calculate Age
      </button>

      {error && <p class="text-red-500 mt-4 text-center">{error}</p>}
      {age && <p class="mt-4 text-center font-medium">{age}</p>}
    </div>
  );
}
