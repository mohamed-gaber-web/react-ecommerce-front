import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayouts from '@layouts/MainLayouts/MainLayouts';
import Home from '@pages/Home';
import Categoris from '@pages/Categoris';
import AboutUs from '@pages/AboutUs';
import Products from '@pages/Products';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'categories',
                element: <Categoris />
            },
            {
                path: 'products/:perfix',
                element: <Products />,
                loader: ({ params }) => {
                    console.log(params)
                    if(typeof params.perfix !== "string" || !/^[a-z]+$/i.test(params.perfix)) {
                        throw new Response("Bad Request", {
                            statusText: "category not found ",
                            status: 400
                        })
                    }
                    return true;
                }
            },
            {
                path: 'about-us',
                element: <AboutUs />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
    ]
    }
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
  
}

export default AppRoutes
