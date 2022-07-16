import { Question, QuestionAlternative } from './../Quiz';
import { QuestionComponent } from './../QuestionComponents';

// Image Question
export interface ImageQuestion extends Question {
    alternatives: ImageAlternative[],
    type: QuestionComponent.image,
}

export interface ImageAlternative extends QuestionAlternative {
    src: string,
    content: string,
    alt: string,
}