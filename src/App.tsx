import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layers from "./Layers";
import Statistics from "./Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layers />,
  },
  {
    path: "statistics",
    element: <Statistics />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
