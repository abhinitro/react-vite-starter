import AdminLayout from "./components/AdminLayout";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog/> },
    ],
  },
];

export default routes;
