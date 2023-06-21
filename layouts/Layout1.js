import SideBar from "../componants/Sidbar"
import Header2 from "../componants/header"

const Layout1 = ({ children }) => {
  return (
    <div className="layout1">
      <Header2 />
      <div className="Layout1-container">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout1
