import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import CategoryPage from "../components/CategoryPage/CategoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "category/:prayerName", element: <CategoryPage /> }
    ],
  },
]);
