import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StudentData from "./components/getstu/StudentData";
import Addstu from "./components/addstu/Addstu";
import Editstu from "./components/updatestu/Editstu";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <StudentData />,
    },
    {
      path: "/add",
      element: <Addstu />,
    },
    {
      path: "/edit/:id",
      element: <Editstu />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
