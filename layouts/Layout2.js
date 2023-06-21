import SideBar from "../componants/Sidbar"
import Footer from "../componants/footer"
import Header2 from "../componants/header"

const Layout2 = ({children}) => {
    return (
      <div>
        <Header2 />
        <main className="about-container">{children}</main>
        
      </div>
    )
  }
  
  export default Layout2
  