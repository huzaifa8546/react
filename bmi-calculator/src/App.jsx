import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  const calculateBmi = useCallback(() => {
    if (!height || !weight) return;
    const heightInM = height / 100;
    const bmiValue = (weight / (heightInM * heightInM)).toFixed(1);

    let statusText = "";
    if (bmiValue < 18.5) statusText = "Underweight";
    else if (bmiValue < 25) statusText = "Normal weight";
    else if (bmiValue < 30) statusText = "Overweight";
    else statusText = "Obese";

    setBmi(bmiValue);
    setStatus(statusText);
  });

  return (
    <div class="max-w-sm mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h1 class="text-2xl font-bold text-center mb-4">BMI Calculator</h1>

      <input
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height (cm)"
        class="w-full mb-2 p-2 border rounded"
        type="number"
        name=""
        id=""
      />

      <input
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight (kg)"
        class="w-full mb-2 p-2 border rounded"
        type="number"
        name=""
        id=""
      />

      <button
        onClick={calculateBmi}
        class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Calculate BMI
      </button>

      <div class="mt-4 text-center">
        <p class="text-lg font-semibold">Your BMI: {bmi}</p>
        <p class="text-sm text-gray-600">{status}</p>
      </div>
    </div>
  );
}

export default App;
