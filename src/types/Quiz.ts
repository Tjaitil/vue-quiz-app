// Non base interface for Quiz
export interface Quiz {
    readonly id: number,
    readonly name: string,
    readonly description: string,
    readonly questions: Question[]
}
// Base interface for Question
export interface Question {
    readonly number: number,
    readonly heading: string,
    readonly alternatives: QuestionAlternative[],
    type: string,
    answeredAlternative?: number,
}

// Base interface for QuestionAlternative
export interface QuestionAlternative {
    id: number,
    correct: boolean,
    content: any,
}