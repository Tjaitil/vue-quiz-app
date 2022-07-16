import { Quiz, Question } from "../../types/Quiz"

// State to be used in quiz store
export type QuizStoreState = {
    availableQuizes: Quiz[],
    currentQuiz: {
        id: number,
        name: string,
        answered: number,
        correctAnswered: number,
        currentQuestion: number,
        questions: Question[],
        finished: boolean
    }
}