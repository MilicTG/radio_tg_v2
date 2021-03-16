import React from 'react'


const NavMenu = ({hidden}) => {
    return (
        <div
            className={
                hidden ? "absolute z-30 flex w-full h-auto bg-white top-24 py-16 items-start list-none transition transform translate-x-0 duration-500 ease-in-out text-center text-gray-800" :
                    "hidden absolute z-30 flex w-full h-auto bg-white top-24 py-16 items-start list-none transition duration-500 ease-in-out text-center text-gray-800"
            }>
            <ul className="w-screen h-auto">
                <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">Emisije</li>
                <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">Marketing</li>
                <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">Kontakt</li>
                <li className="cursor-pointer h-full p-3 hover:text-blue-400 transition-all">Aplikacija</li>
                <li className="h-full w-full p-3">
                    <button
                        className="bg-blue-400 p-4 w-full text-white rounded-md cursor-pointer hover:bg-blue-800 transition-all">
                        RTG Music
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu