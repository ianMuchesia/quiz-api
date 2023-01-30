export interface country{
    name: string;
    alpha2code: string;

}
export interface Props{
    countries: [];
    selectedCategory: {
        categories: string;
        difficulty: string;
        region: string;
    };
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface AppContextType{
    quiz: Quiz[];
    setQuiz:React.Dispatch<React.SetStateAction<Quiz[]>>;
}

export interface Quiz{
    question: string;
}