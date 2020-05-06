import { useLocalStorage } from "./useLocalStorage"
import React, { useEffect } from 'react';

export const useDarkMode = (key, intitialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (value === true){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    }, [value])

    return [value, setValue]

}
