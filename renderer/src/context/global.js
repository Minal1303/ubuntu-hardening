"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalContextProvider({children}) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Home");

    const toggleOpen = () => {
        setOpen(!open);
    }

    const handleSelect = (option) => {
        setSelected(option);
    }

    return (
        <GlobalContext.Provider
            value={{
                open, 
                selected,
                toggleOpen,
                handleSelect
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}