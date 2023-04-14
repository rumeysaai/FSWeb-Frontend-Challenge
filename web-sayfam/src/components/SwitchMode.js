import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SwitchMode = ({ changeMode, mode }) => {

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {

        setDarkMode(!darkMode);
        changeMode(darkMode)

        notify();
    }
    const notify = () => {
        darkMode ? toast("Switched to dark mode!", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            }) : toast("Switched to light mode!", {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
    }

    return (
        <div className="switch-container flex justify-end pt-8 my-0 mx-auto">
            <div className="dark-mode">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input onClick={toggleDarkMode} type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 rounded-full peer 
                    dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-indigo-300 
                    dark:peer-focus:ring-indigo-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:border-gray-300 after:border after:rounded-full 
                    after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                    <span className="ml-3 text-sm font-bold text-gray-500 dark:text-gray-200">{darkMode ? "DARK MODE" : "LIGHT MODE"}</span>
                </label>
            </div>
            <div>
                <p className="dark:text-gray-200 ml-3 text-sm font-bold text-neutral-500 ">|</p>
            </div>
            <div className="lang-mode">
                <a className="ml-3 text-sm font-bold text-neutral-500 dark:text-gray-200"><span className="text-md font-bold text-indigo-700 dark:text-indigo-300">TÜRKÇE</span> 'YE GEÇ</a>
            </div>
            <ToastContainer />
        </div>
    )
}
export default SwitchMode;