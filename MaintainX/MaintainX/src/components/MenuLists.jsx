 import { NavLink } from "react-router-dom"
 import { FaInbox, FaRegFileAlt, FaCompressArrowsAlt } from "react-icons/fa"
 import {FaGears} from "react-icons/fa6"
 import {FiUsers} from "react-icons/fi"
 import {HiMiniInboxArrowDown, HiMiniListBullet} from "react-icons/hi2"
 import {BiMessageRounded, BiSolidPurchaseTagAlt, BiSolidBarChartAlt2} from "react-icons/bi"
 import {SlSpeedometer, SlLocationPin} from "react-icons/sl"
 import {ImDrawer} from "react-icons/im"

 const MenuLists = () => {
   return (
     <div className="menuList">
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to='/workorders'><FaInbox/>Work Order</NavLink>
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to='/purchaseorders'><FaRegFileAlt/>Purchase Orders</NavLink>
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to='/reporting'><BiSolidBarChartAlt2/>Reporting</NavLink>
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to='/request'><HiMiniInboxArrowDown/>Request</NavLink>
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to='/assets'><FaCompressArrowsAlt/> Assets</NavLink>
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to='/messages'> <BiMessageRounded/>Messages</NavLink>
       <hr />
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to='/categories'><BiSolidPurchaseTagAlt/>Categories</NavLink>
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to='/partinventory'><FaGears/>Part Inventory</NavLink>
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to='/procedureliberary'><HiMiniListBullet/>Procedure Liberary</NavLink>
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to='/meters'><SlSpeedometer/>Meter</NavLink>
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to= '/location'><SlLocationPin/>Location</NavLink>
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to= '/teams'><FiUsers/>Teams / Users</NavLink>
        <NavLink className={({isActive}) => isActive ? 'menuList__active' : 'menuList__menuItems'} to= '/vendor'><ImDrawer/>Vendor</NavLink>
        <hr />
     </div>
   )
 }
 
 export default MenuLists