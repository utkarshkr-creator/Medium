import Link from "next/link"
import { MenuButton } from "./menuButton"
export const Navbar = () => {
  return <div className="border-b flex justify-between px-10 py-4">
    <Link href={'/blogs'} className="flex flex-col justify-center cursor-pointer">
      Medium
    </Link>
    <div className="flex">
      <Link href="/blogs/publish">
        <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">publish</button>
      </Link>
      <MenuButton name="Utkarsh" />
    </div>
  </div>
}
