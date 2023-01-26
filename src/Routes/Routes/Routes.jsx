import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Education from "../../pages/Education/Education";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import Skill from "../../pages/Skill/Skill";

const router = createBrowserRouter([
    {
        path: '',
        element: <Main />,
        children: [
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/education',
                element: <Education/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/skills',
                element: <Skill/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
])
export default router;