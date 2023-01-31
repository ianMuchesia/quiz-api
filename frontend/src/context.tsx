import React, {useState, useContext} from 'react'
import { AppContextType } from './@types/types';

const AppContext = React.createContext<AppContextType|undefined>(undefined)


interface ContextProps {
    children: React.ReactNode;
}

const AppProvider: React.FC<ContextProps> = ({children}) =>{


      const [selectedCategory , setSelectedCategory ] = useState({
    categories:"",
    difficulty:"",
    region:"",
  })
    return(
        <AppContext.Provider value={{selectedCategory, setSelectedCategory}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = ()=>{
    return useContext(AppContext)
}


export {AppContext, AppProvider}