import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { About } from "./pages/About";
import { IronManHistory } from "./pages/IronManHistory";
import { Strategy } from "./pages/Strategy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "categories", Component: Categories },
      { path: "about", Component: About },
      { path: "blog/iron-man-history", Component: IronManHistory },
      { path: "strategy", Component: Strategy },
    ],
  },
]);
