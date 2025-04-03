import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Login from "./pages/Login.js"
import UserProfile from "./pages/UserProfile.js"
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      }, 
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: "/profile/:id",
        element: <UserProfile />,
        errorElement: <ErrorPage />
      }

]

export default routes
