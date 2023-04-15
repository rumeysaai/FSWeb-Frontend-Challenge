import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/action";
import { NavLink } from "react-router-dom";
import '../style/style.css';

const About = () => {

    const aboutMe = useSelector((store) => store.about);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [])
    return (

        <div className="about-container mb-28 flex mx-auto max-w-screen-xl">
            <div className="about-texts flex text-left flex-col">
                <h2 className="text-name text-base text-indigo-700 font-semibold dark:text-indigo-300">{aboutMe.name}</h2>
                <h1 className="my-10 text-7xl font-bold dark:text-indigo-100 w-4/5" >{aboutMe.header}</h1>
                <p className="dark:text-gray-200 text-xl text-neutral-500 w-10/12">{aboutMe.description}</p>
                <div className="about-links flex">
                    <NavLink className="bg-indigo-700 
                    hover:bg-indigo-800 text-white dark:bg-indigo-200 dark:text-zinc-900
                    dark:hover:bg-indigo-300
                    font-semibold py-2 px-4 rounded-md flex justify-evenly w-32 mt-10 mr-5 items-center h-12"
                    to="/hire"
                    >
                        Hire Me
                    </NavLink>
                    <a className="w-32 mt-10 mr-5 justify-evenly items-center flex bg-transparent hover:bg-indigo-700 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded-md
                    dark:text-indigo-200 dark:bg-white" href="https://github.com/rumeysaai">
                        <img src="./img/icons/github-icon.png" className="flex about-icons w-4 h-4" /> Github
                    </a>
                    <a className="w-32 mt-10 mr-5 justify-evenly flex items-center bg-transparent
                     dark:bg-white dark:text-indigo-200
                     hover:bg-indigo-700 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded-md" href="https://www.linkedin.com/in/rumeysa-akg%C3%BCn-ileri-18791ab7/">
                        <img src="./img/icons/in-icon.png" className="w-4 h-3 flex about-icons"/> Linkedin
                    </a>
                </div>
            </div>
            <div className="about-img flex m-auto">
                <img src="./img/pp.jpg" className="rounded-2xl"/>
            </div>

        </div>


    )
}
export default About;