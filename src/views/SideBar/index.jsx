import { Link } from "react-router-dom"

export const SideBar = () => {
  return (
    <div className="h-screen w-[237px] fixed z-10 left-0 right-0 top-0 bg-[#FAFBFD] flex flex-col items-center">
      <div>
        <h1 className="text-[20px] font-bold mt-[47.07px] mb-[90px]">
          <span className="text-[#F7542E]">Dev</span>
          <span className="text-[#090F31]">challenges.io</span>
        </h1>
        <ul className="text-[#9E9E9E] text-[15px] flex flex-col gap-7">
          <li className="liNav">
            <Link className="navLink" to={'/colors'}>Colors</Link>
          </li>
          <li className="liNav">
            <Link className="navLink" to={'/typography'}>Typography</Link>
          </li>
          <li className="liNav">
            <Link className="navLink" to={'/spaces'}>Spaces</Link>
          </li>
          <li className="liNav">
            <Link className="navLink" to={'/buttons'}>Buttons</Link>
          </li>
          <li className="liNav">
            <Link className="navLink" to={'/inputs'}>Inputs</Link>
          </li>
          <li className="liNav">
            <Link className="navLink" to={'/grid'}>Grid</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
