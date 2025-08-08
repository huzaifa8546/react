import React, { useState } from "react";

function DarkApp() {
  const [isDarkMode, setisDarkMode] = useState(false);
  const toggleTheme = () => {
    setisDarkMode(!isDarkMode);
  };
  // Step 3: Dynamic style or class
  const appStyle = {
    backgroundColor: isDarkMode ? "#121212" : "#f5f5f5",
    color: isDarkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={appStyle}>
      <h1>{isDarkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default DarkApp;
