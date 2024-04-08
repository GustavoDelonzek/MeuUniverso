import { React , useContext, useState, useEffect, createContext } from "react";


export const ThemeHeaderContext = createContext({});

function ThemeHeaderProvider({children}){
    const [theme, setTheme] = useState('transparent');
    const [isHome, setIsHome] = useState(true);
    const toggleTheme = () => {
        setTheme(isHome ?  'transparent' : 'solid');
    }

    function toggleIsHome (estado){
        setIsHome(estado)
        
        toggleTheme();
    }
    
    return(
        <ThemeHeaderContext.Provider value={{
            theme, 
            toggleIsHome
        }}
        >
            {children}
        </ThemeHeaderContext.Provider>
    )

}

export default ThemeHeaderProvider;