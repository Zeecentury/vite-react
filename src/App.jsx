import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/assets/styles/App.css";
import {
  About,
  Contactus,
  Experience,
  Home,
  HomeLayout,
  Resume,
  Services,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactus",
        element: <Contactus />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
