import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import { Login } from "./components/Login"
import { Signup } from "./components/Signup"
import { Highlights } from "./components/Highlights"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import Content from "./components/Content"
import { Projects } from "./components/Projects"

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />, 
      children: [
        {
          path: "", 
          element: <Content />
        },
        {
          path: "highlights", 
          element: <Highlights />
        },
        {
          path: "experience", 
          element: <Experience />
        },
        {
          path: "projects", 
          element: <Projects />
        },
        {
          path: "contact", 
          element: <Contact />
        },
        {
          path: "/login", 
          element: <Login />
        },
        {
          path: "/signup", 
          element: <Signup />
        }
      ]
    }
  ])

  export default router