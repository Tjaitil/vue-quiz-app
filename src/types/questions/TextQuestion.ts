import { Question, QuestionAlternative } from './../Quiz';
import { QuestionComponent } from './../QuestionComponents';

export interface TextQuestion extends Question {
    alternatives: TextAlternative[],
    type: QuestionComponent.text,
}

export interface TextAlternative extends QuestionAlternative {
    content: string,
}

