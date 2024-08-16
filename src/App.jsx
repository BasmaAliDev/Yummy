import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import Details from './component/Details/Details';
import Search from './component/Search/Search';
import Categories from './component/Categories/Categories';
import Contact from './component/Contact/Contact';
import Area from './component/Area/Area';
import Ingredients from './component/Ingredients/Ingredients';
import NotFound from './component/NotFound/NotFound';
const routers=createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {path:'/',element:<Home/>},
    {path:'/home',element:<Home/>},
    {path:'/search',element:<Search/>},
    {path:'/categories',element:<Categories/>},
    {path:'/contact',element:<Contact/>},
    {path:'/area',element:<Area/>},
    {path:'/ingredients',element:<Ingredients/>},
    {path:'/:id',element:<Details/>},
    {path:'*',element:<NotFound/>}
  ]}
])
export default function App() {
  return <>
 <RouterProvider router={routers}></RouterProvider>
  </>
}

