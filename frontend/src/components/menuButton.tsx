"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export const MenuButton = ({ name }: { name: string }) => {
  const [toggel, setToggel] = useState(false);
  const router = useRouter();
  function handerClick() {
    setToggel(!toggel);
  }
  function handlerSignout() {
    localStorage.removeItem("token");
    router.push('/signin');
  }
  return (
    <>
      <div onClick={handerClick} className="relative inline-flex items-center justify-center cursor-pointer overflow-hidden bg-gray-300 rounded-full w-10 h-10">
        <span className="flex text:md font-bold text-gray-600 dark:text-gray-900">
          {name[0]}
        </span>
      </div>

      {
        toggel ?
          <div id="dropdownMenu" className="absolute z-10 mt-10 w-48 rounded-md shadow-lg overflow-hidden bg-white mr-14">
            < ul className="px-2 py-3 space-y-1" >
              <li>
                <div onClick={handlerSignout} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 cursor-pointer">Sign out</div>
              </li>
            </ul >
          </div > : ""}
    </>
  )
};
