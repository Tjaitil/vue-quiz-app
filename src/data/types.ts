export type quizType = {
    id: number,
    name: string,
    description: string,
    questions: questionType[]
}
export type questionType = {
    number: number,
    heading: string,
    alternatives: any[],
    correct: number,
}
export type quizState = {
    availableQuizes: quizType[]
    currentQuiz: {
        id: number,
        answered: number,
        correctAnswered: number,
        currentQuestion: number,
        questions: questionType[]
    }
}
