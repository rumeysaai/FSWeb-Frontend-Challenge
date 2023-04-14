import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useMode =(key, initialValue)=>{
    const[theme, setTheme]=useLocalStorage(key, initialValue);
    const[dark, setDark]=useState(!theme ? localStorage.theme="light" : localStorage.theme="dark")

    const changeMode =(updatedMode)=>{
        setTheme(updatedMode);
        document.getElementsByTagName("html")[0].setAttribute("class", updatedMode ? "dark": "light")
    }
    return [theme, changeMode]
}
export default useMode;