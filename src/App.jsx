
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import MoviesListPage from "./pages/MoviesListPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: LandingPage
      },
      {
        path: "movies",
        Component: MoviesListPage
      }
    ]
  },
  {
    path: "*",
    Component: NotFoundPage
  }

]);



function Router() {

  return (<RouterProvider router={router} />)
  
}

export default Router
