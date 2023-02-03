export interface country{
    name: string;
    alpha2Code: string;

}

export interface quizType{
    question:string;
    incorrectAnswers:string[];
    correctAnswer:string;
}
export interface Props{
    countries:[];
   
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}



export interface AppContextType{
    selectedCategory: {
        categories: string;
        difficulty: string;
        region: string;
    };
    setSelectedCategory: React.Dispatch<React.SetStateAction<{
        categories: string;
        difficulty: string;
        region: string;
    }>>;
  
}

