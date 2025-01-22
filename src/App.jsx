import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from "./Home.jsx";
import About from "./About.jsx";
import Layout from "./Layout.jsx";
import CompanyList from "./SpotList.jsx";
import CompanyCreateForm from "./SpotCreateForm.jsx";
import CompanyDetail from "./SpotDetail.jsx";

const router = createBrowserRouter([
    {
        element:<Layout/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/companys',
                element:<CompanyList/>
            },
            {
                path:'/companys/create',
                element:<CompanyCreateForm/>
            },
            {
                path:'/companys/:id',
                element:<CompanyDetail/>
            },
        ]
    }
]);

function App() {

    return <RouterProvider router={router}/>
}

export default App
