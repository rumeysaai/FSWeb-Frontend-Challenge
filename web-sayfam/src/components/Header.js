import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container flex justify-between mx-auto mt-8 mb-20 max-w-screen-xl">
            <div className="circle dark:bg-indigo-600">
                <p className="text-indigo-500 font-semibold dark:text-indigo-200">R</p>
            </div>
            <div className="header-links flex justify-between items-center">
                <a className="text-neutral-500 text-xl font-lg mr-12 hover:text-indigo-800 dark:hover:text-gray-200" href="#skills">Skills</a>
                <a className="text-neutral-500 text-xl font-lg mr-12 hover:text-indigo-800 dark:hover:text-gray-200" href="#projects">Projects</a>
                <NavLink className="flex w-28 justify-center text-base font-lg hover:bg-indigo-700 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded dark:text-indigo-700 dark:bg-white" to="/hire">Hire Me</NavLink>
            </div>
        </div>

    )
}
export default Header;