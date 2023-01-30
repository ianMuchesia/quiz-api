import React, {useState, useContext} from 'react'
import { AppContextType, Quiz } from './@types/types';

const AppContext = React.createContext<AppContextType|undefined>(undefined)

interface ContextProps {
    children: React.ReactNode;
}

const AppProvider: React.FC<ContextProps> = ({children}) =>{
    const [quiz, setQuiz] = useState<Quiz[]>([])
    return(
        <AppContext.Provider value={{quiz, setQuiz}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}