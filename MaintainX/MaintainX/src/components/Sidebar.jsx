import MenuLists from "./MenuLists"


const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="../../assets/logo.svg" alt="" className="sidebar__logo"/>
      <MenuLists/>
    </div>
  )
}

export default Sidebar