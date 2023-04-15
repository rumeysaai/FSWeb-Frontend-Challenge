import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getData } from "../actions/action";

const Footer = () => {
    const contact = useSelector((store) => store.contact)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div className="dark:bg-zinc-950 footer-container flex justify-evenly bg-gray-50 max-w-screen-xl mx-auto">
            <div className="left flex flex-col text-left justify-around w-4/12 my-12">
                <h2 className="text-5xl font-semibold dark:text-indigo-200">Let's work together on your next product.</h2>
                <p className="text-xl font-semibold text-pink-700 underline mb-8 dark:text-violet-300">{contact.email}</p>
            </div>
            <div className="right flex justify-end items-center">
                <a className="font-semibold mt-24 ml-8 text-xl dark:text-blue-100"href={contact.blog}>Personal Blog</a>
                <a className="font-semibold mt-24 ml-8 text-xl" href={contact.github}>Github</a>
                <a className="font-semibold mt-24 ml-8 text-xl" href={contact.linkedin}>Linkedin</a>
            </div>
        </div>
    )
}
export default Footer;