import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./simple comps/Layout";
import Content from "./js comps/Content";
import ClientInfo from "./js comps/ClientInfo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Content /> },
        { path: ":id", element: <ClientInfo /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
