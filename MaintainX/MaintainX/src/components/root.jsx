import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Contact from "./Contact"
const Root = () => {
  return (
    <div className="root">
    <div className="root__page">
    <Sidebar/>
    
    <Contact/>
    </div>
    <div className="root__content">
    <Outlet/>
    </div>
    </div>
  )
}

export default Root