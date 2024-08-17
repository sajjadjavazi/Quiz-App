import React, { createContext, useReducer, ReactNode } from 'react';

// Define the type for the state
type QuizState = {
    category: string;
    difficulty: string;
    numberOfQuestions: number;
    questions: any[]; // Adjust type as per your API response
    currentQuestionIndex: number;
    score: number;
};

// Define the type for the actions
type Action =
    | { type: 'SET_CATEGORY'; payload: string }
    | { type: 'SET_DIFFICULTY'; payload: string }
    | { type: 'SET_NUMBER_OF_QUESTIONS'; payload: number }
    | { type: 'SET_QUESTIONS'; payload: any[] }
    | { type: 'SET_CURRENT_QUESTION_INDEX'; payload: number }
    | { type: 'INCREMENT_SCORE' }
    | { type: 'RESET' };

// Define the initial state
const initialState: QuizState = {
    category: '',
    difficulty: '',
    numberOfQuestions: 10,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
};

// Create the reducer function
const quizReducer = (state: QuizState, action: Action): QuizState => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return { ...state, category: action.payload };
        case 'SET_DIFFICULTY':
            return { ...state, difficulty: action.payload };
        case 'SET_NUMBER_OF_QUESTIONS':
            return { ...state, numberOfQuestions: action.payload };
        case 'SET_QUESTIONS':
            return { ...state, questions: action.payload };
        case 'SET_CURRENT_QUESTION_INDEX':
            return { ...state, currentQuestionIndex: action.payload };
        case 'INCREMENT_SCORE':
            return { ...state, score: state.score + 1 };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

// Create the context
const QuizContext = createContext<{
    state: QuizState;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

// Create a provider component
export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizContext;
