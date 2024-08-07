import { useState } from "react";
import { Link } from "react-router-dom";

const Layers = () => {
  const [elements, setElements] = useState<number[]>([]);
  const fields = [...Array(5).keys()];

  const handleSelectAll = () => {
    if (elements.length === fields.length) {
      setElements([]);
      localStorage.setItem("selectedElements", JSON.stringify([]));
      return;
    }
    setElements(fields);
    localStorage.setItem("selectedElements", JSON.stringify(fields));
  };

  window.addEventListener("storage", () => {
    const selectedElements = JSON.parse(
      localStorage.getItem("selectedElements") || "[]"
    );
    setElements(selectedElements);
  });

  return (
    <div>
      <h1>Layers</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <button onClick={handleSelectAll}>
          {elements.length ? "Deselect all" : "Select All"}
        </button>
        <Link to="/statistics">Statistics</Link>
      </div>

      {fields.map((_, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            margin: "10px 0",
            backgroundColor: elements.includes(Number(index))
              ? "#f0f0f0"
              : "transparent",
          }}
        >
          <h2>Field {index}</h2>
          <p>Layer {index} content</p>
        </div>
      ))}
    </div>
  );
};

export default Layers;
