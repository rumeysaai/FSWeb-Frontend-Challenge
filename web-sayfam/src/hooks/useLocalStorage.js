import { useState } from "react";
import { useEffect } from 'react';

const useLocalStorage = (key, initialValue)=>{
    const[storedValue, setStoredValue]=useState(()=>{
        
        const item = localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
    })

    const setValue = (value)=>{
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      },[])

    return [storedValue, setValue];

}
export default useLocalStorage;