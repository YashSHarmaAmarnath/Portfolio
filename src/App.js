import './App.css';
import { Nav } from './components/Nav';
import { Links } from './components/Links';
import { Info } from './components/Info';
import { Skill } from './components/Skill';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
// import { Bg } from './components/Bg';

import { AnimatedCursorComponent } from './components/AnimatedCursorComponent';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Nav/><div className="skc"><Info/> <AnimatedCursorComponent/><Links/></div></>,
    },
    {
      path: "/about",
      element:<><Nav/><AnimatedCursorComponent/><div className="skc">
      </div></>,
    },
    {
      path: "/skill",
        element:<><Nav/><AnimatedCursorComponent/><Skill/></>,
    },
    {
      path: "/project",
      element:<><Nav/><AnimatedCursorComponent/><div className="skc"><Project/></div></>,
    },
    {
      path: "/contact",
      element:<><Nav/><AnimatedCursorComponent/><div className="skc"><Contact/></div></>,
    },
   ]);
return (
  <>
 <RouterProvider router={router}/>
  </>
);
}

export default App;
