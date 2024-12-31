import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './page/Login';
import Main from './layouts/Main';
import Register from './page/Register';
import CourseForm from './page/CourseForm';
import CourseCards from './page/CourseCards';
import { Toaster } from 'react-hot-toast';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addCourse",
        element: <CourseForm></CourseForm>,
      },
      {
        path: "/allCourse",
        element: <CourseCards></CourseCards>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
   <Toaster />
  </StrictMode>,
)
