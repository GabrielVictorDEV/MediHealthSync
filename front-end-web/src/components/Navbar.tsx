'use client'
import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

export function Navbar() {
  const [isDropdownVisible, setDropdownVisibility] = useState(false)

  return (
    <nav className="w-full top-0 flex justify-center items-center bg-blue-200 ">
      <div className="flex flex-row items-center justify-between  top-0 w-full max-w-6xl text-white-100 py-2">
        <div>
          <p className="text-slate-900 flex"></p>
        </div>

        <div className="flex justify-between items-center flex-row gap-2">
          <div className="rounded-full w-8 h-8 bg-white-100 flex justify-center items-center">
            <p className="text-slate-900">?</p>
          </div>

          <div className="flex justify-center items-center text-slate-900">
            <p
              className="cursor-pointer rounded-full bg-white-100 p-2"
              onClick={() => setDropdownVisibility(!isDropdownVisible)}
            >
              <AiOutlineUser size="20px" />
            </p>

            {/* Dropdown menu */}
            <div
              id="userDropdown"
              className={`${
                isDropdownVisible ? 'block' : 'hidden'
              } z-10 bg-white divide-gray-100 rounded-lg shadow-md mr-24 w-56 mt-[270px] bg-blue-300 absolute`}
            >
              <div className="px-4 py-3 text-sm text-gray-900 bg-blue-400">
                <div className="flex justify-between items-center">
                  Nome do usuario
                  <p
                    className="cursor-pointer"
                    onClick={() => setDropdownVisibility(false)}
                  >
                    <MdClose />
                  </p>
                </div>
              </div>
              <ul className="py-2 text-sm" aria-labelledby="avatarButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-400">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-400">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-400">
                    Earnings
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-blue-400"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
