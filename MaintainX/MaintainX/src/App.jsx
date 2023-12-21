import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkOrder from './pages/workOrder';
import Purchase from './pages/Purchase';
import Reporting from './pages/Reporting';
import Request from './pages/Request';
import Messages from './pages/Messages';
import Categories from './pages/Categories';
import Procedures from './pages/Procedures';
import Meter from './pages/Meter';
import Teams from './pages/Teams';
import Location from './pages/Location'
import PartInventory from "./pages/PartInventory";
import Asset from "./pages/Asset";
import Vendor from './pages/Vendor';
import Root from './components/root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,

    children: [
      {
        path: "/workorders",
        index: true,
        element: <WorkOrder/>,
      },
      {
        path: "/purchaseorders",
        element: <Purchase/>,
      },
      {
        path: "/reporting",
        element: <Reporting/>,
      },
      {
        path: '/request',
        element: <Request/>
      },
      {
        path: '/assets',
        element: <Asset/>
      },
      {
        path: '/messages',
        element: <Messages/>
      },
      {
        path: '/categories',
        element: <Categories/>
      },
      {
        path: '/partinventory',
        element: <PartInventory/>
      },
      {
        path: '/procedureliberary',
        element: <Procedures/>
      },
      {
        path: '/meters',
        element: <Meter/>
      },
      {
        path: '/location',
        element: <Location/>
      },
      {
        path: '/teams',
        element: <Teams/>
      },
      {
        path: '/vendor',
        element: <Vendor/>
      }
    ]
  },
]);

const App = () => {
  return (
  <>
    <div className="App"> 
   <  RouterProvider router = {router} />
    </div>
  </>

  )
}

export default App