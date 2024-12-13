import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { BasicChallanges, BasicChallange } from "./basic-challanges";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "basic-challanges",
        Component: BasicChallanges,
      },
      {
        path: "basic-challanges/:challangeId",
        Component: BasicChallange,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
