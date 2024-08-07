import { useEffect, useState } from "react";

const Statistics = () => {
  const [fields, setFields] = useState<number[]>();

  useEffect(() => {
    window.addEventListener("storage", () => {
      const elements = localStorage.getItem("selectedElements");
      if (elements) {
        setFields(JSON.parse(elements));
      }
    });
  }, []);

  return (
    <div>
      <h1>Statistics</h1>

      {fields?.map((_, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            margin: "10px 0",
          }}
        >
          <h2>Field {index}</h2>
          <p>Layer {index} content</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
