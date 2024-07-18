import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./simple comps/Layout";
import Content from "./js comps/Content";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Content /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
