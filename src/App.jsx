import { Outlet } from "react-router-dom"
import { SideBar } from "./views/SideBar"



function App() {

  return (
    <div className="flex h-full w-full">
      <SideBar />
      <div className="flex ml-[319px] mt-[53px] w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default App
