export type quizType = {
    readonly id: number,
    readonly name: string,
    readonly description: string,
    readonly questions: questionType[]
}
export type questionType = {
    readonly number: number,
    readonly heading: string,
    readonly alternatives: any[],
    correct: number,
}
export type quizState = {
    availableQuizes: quizType[]
    currentQuiz: {
        id: number,
        name: string,
        answered: number,
        correctAnswered: number,
        currentQuestion: number,
        questions: questionType[],
        finished: boolean
    }
}
