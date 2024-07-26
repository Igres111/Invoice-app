import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./simple comps/Layout";
import Content from "./js comps/mainpage/Content";
import ClientInfo from "./js comps/clientpage/ClientInfo";
import Edit from "./js comps/editpage/Edit";
import New from "./js comps/createNewPage/New";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Content /> },
        { path: ":id", element: <ClientInfo /> },
        { path: "edit", element: <Edit /> },
        { path: "new", element: <New /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
