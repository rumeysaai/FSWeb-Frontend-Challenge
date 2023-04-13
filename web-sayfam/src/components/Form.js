import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { createOffer } from "../actions/action"

const Form = () => {

    const [message, setMessage] = useState([]);

    const messages = useSelector(store => store.messages);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            position: "",
            message: ""
        }
    });

    const handleMessage = (newMessage) => {
        setMessage([...message, newMessage])
    }

    const createMessage = (createdMessage) => {
        handleMessage({
            ...createdMessage,
            id: nanoid(5),
        })
        notify();
    }
    const notify = () => {
        toast("Your message is sent!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    useEffect(() => {
        dispatch(createOffer(message));
    }, [message])

    return (
        <div className="h-full">
            <div className="header-container flex justify-between mx-auto pt-8 mb-20">
                <div className="circle dark:bg-indigo-600">
                    <p className="text-indigo-500 font-semibold dark:text-indigo-200">R</p>
                </div>
                <div className="header-links flex justify-between items-center">
                    <NavLink className="text-neutral-500 text-xl font-lg mr-12 hover:text-indigo-800 dark:hover:text-gray-200" to="/">Skills</NavLink>
                    <NavLink className="text-neutral-500 text-xl font-lg mr-12 hover:text-indigo-800 dark:hover:text-gray-200" to="/">Projects</NavLink>
                    <NavLink className="flex w-28 justify-center text-base font-lg hover:bg-indigo-700 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded dark:text-indigo-700 dark:bg-white" to="/">Home</NavLink>
                </div>
            </div>
            <div className="header-text pb-4 pt-3">
                <h3 className="text-5xl font-semibold mt-6 mb-12 text-indigo-800 dark:text-indigo-100">Would you like to work with me?</h3>
                <h4 className="text-3xl font-semibold text-indigo-900 my-4 dark:text-violet-300">Please fill the form and submit!</h4>
            </div>
            <form className="w-full max-w-xl mx-auto pt-8 h-full pb-40" onSubmit={handleSubmit(createMessage)}>
                <div className="md:items-center flex flex-col">
                    <div className="md:w-1/3 my-4 mr-44">
                        <label className="block text-gray-600 font-bold md:text-left  mb-1 md:mb-0 pr-4 dark:text-gray-200" htmlFor="name">
                            Full Name
                        </label>
                    </div>
                    <div className="md:w-2/3 mb-4">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="name" type="name" placeholder="Jane Doe"
                            name="name"
                            {...register("name", { required: "Full name is required" })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}<br />
                    </div>
                </div>
                <div className=" md:items-center  flex flex-col">
                    <div className="md:w-1/3 mb-4 mr-44">
                        <label className="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4 dark:text-gray-200" htmlFor="email">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3 justify-center mb-4">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="email" type="email" placeholder="abc@abc.com"
                            name="email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}<br />
                    </div>
                </div>
                <div className=" md:items-center  flex flex-col">
                    <div className="md:w-1/3 justify-center mr-44 mb-4">
                        <label className="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4 dark:text-gray-200 " htmlFor="phone">
                            Phone
                        </label>
                    </div>
                    <div className="md:w-2/3 justify-center mb-4">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="phone" type="phone" placeholder="+90 --- --- -- --"
                            name="phone"
                            {...register("phone", { required: "Phone is required" })}
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}<br />
                    </div>
                </div>
                <div className=" md:items-center  flex flex-col">
                    <div className="md:w-1/3 justify-center mb-4 mr-44">
                        <label className="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4 dark:text-gray-200" htmlFor="company">
                            Company
                        </label>
                    </div>
                    <div className="md:w-2/3 justify-center mb-4">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="company" type="text" placeholder="Company that you r workin for"
                            name="company"
                            {...register("company", { required: "Company name is required" })}
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}<br />
                    </div>
                </div>
                <div className=" md:items-center flex flex-col">
                    <div className="md:w-1/3 justify-center mb-4 mr-44">
                        <label className="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4 dark:text-gray-200" htmlFor="position">
                            Position
                        </label>
                    </div>
                    <div className="md:w-2/3 justify-center mb-4">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="position" type="text" placeholder="Your position in the company"
                            name="position"
                            {...register("position", { required: "Position name is required" })}
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}<br />
                    </div>
                </div>
                <div className="md:items-center  flex flex-col">
                    <div className="md:w-1/3 justify-center mb-4 mr-44">
                        <label className="block text-gray-600 font-bold md:text-left mb-1 md:mb-0 pr-4 dark:text-gray-200" htmlFor="text">
                            Offer
                        </label>
                    </div>
                    <div className="md:w-2/3 justify-center mb-4">
                        <textarea className="bg-gray-200 appearance-none h-36 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 align-top"
                            id="message" type="message" name="message" placeholder="What is your offer for me ?"
                            {...register("message", { required: "Message is required" })} />
                        {errors.message && <p>{errors.message.message}</p>}<br />
                    </div>
                </div>
                <div className="md:items-center">
                    <div className="md:w-2/3 flex justify-center mt-4 mx-auto">
                        <button className="shadow bg-indigo-600 hover:bg-indigo-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded dark:bg-neutral-200 dark:text-indigo-600  dark:hover:bg-neutral-100"
                            type="submit"
                            disabled={!isValid}>
                            Contact Me!
                        </button>
                    </div>
                </div>
                <ToastContainer />
            </form>
        </div>
    )
}
export default Form;