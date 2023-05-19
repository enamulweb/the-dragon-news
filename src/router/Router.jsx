import {
  Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import Newslayout from "../layout/Main/Newslayout";
import News from "../pages/News/News/News";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Home/Register/Register";
import NavBarLayout from "../layout/NavBarLayout/NavBarLayout";
import NavBar from "../pages/shared/NavBar/NavBar";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Terms from "../pages/shared/Terms/Terms";



  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBarLayout/>,
      children: [
        {
          path: '/',
          element: <Navigate to='/category/0'></Navigate>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: 'register',
          element:<Register></Register>
        },
        {
          path: 'terms',
          element:<Terms></Terms>
        },
      ]
    },

    {
      path: "category",
      element: <Main></Main>,
      children:[
        
        {
            path: ":id",
            element: <Category></Category>,
            loader :({params})=> fetch(`http://localhost:5000/categories/${params.id}`)       
        },
       
      ]
    },
    {
      path: 'news',
      element: <Newslayout></Newslayout>,
      children:[
        {
          path: ':id',
          element:<PrivateRouter><News></News></PrivateRouter>,
          loader :({params})=> fetch(`http://localhost:5000/news/${params.id}`) 

        }
      ]

    }
  ]);

  export default router;