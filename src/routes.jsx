import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import { Login } from "./components/Login"
import { Signup } from "./components/Signup"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Services } from "./components/Services"
import Content from "./components/Content"

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
          element: <About />
        },
        {
          path: "services", 
          element: <Services />
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