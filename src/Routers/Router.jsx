import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";





const Router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>

                <Layout></Layout>
            </>
        ),
        children: [
            {
                path: "/",
                element: <Home></Home>,



            },


        ],
    },

    {
        path: "*",
        element: <div>Error................ </div>
    },
]);

export default Router;
