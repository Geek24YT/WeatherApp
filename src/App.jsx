import { useState } from "react";
import "./App.css";
import { Paper } from "@mui/material";
function App() {
  const paperStyles = {
    width: "30%",
    height: "70vh",
    background:
      "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5))", // Use a linear gradient with different alpha values to create a frosted glass effect.
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper sx={paperStyles}>
          <input
            type="search"
            id="input_search"
            placeholder="Enter City Name"
            style={{
              margin: "5em",
              width: "100%",
              height: "40px",
              fontSize: "20px",
              outline: "none",
              border: "none",
              background: "transparent",
              textAlign: "center",
            }}
          />
        </Paper>
      </div>
    </>
  );
}

export default App;
