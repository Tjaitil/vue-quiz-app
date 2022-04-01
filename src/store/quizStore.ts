
import { defineStore } from "pinia";
import { quizType, quizState } from "../data/types"


export const useStore = defineStore({
    id: "quizStore",
    state: () =>
    ({
        availableQuizes: [],
        currentQuiz: {
            id: 0,
            answered: 0,
            correctAnswered: 0,
            currentQuestion: 1,
            questions: []
        }
    } as quizState),
    getters: {
        getCurrentQuiz: state => state.currentQuiz,
        getAvailableQuizes(): Array<object> {
            return this.availableQuizes;
        },
        getCurrentQuestion: state => state.currentQuiz.questions[state.currentQuiz.currentQuestion - 1],
    },
    actions: {
        setNewQuiz(newQuiz: quizType) {
            this.currentQuiz.id = newQuiz.id;
            this.currentQuiz.questions = newQuiz.questions;
        },
        cancelCurrentQuiz() {
            this.currentQuiz.id = 0;
            this.currentQuiz.questions = [];
        },
        updateCorrect(correct: boolean) {
            if(correct) this.currentQuiz.correctAnswered++;
        },
        nextQuestion() {
            this.currentQuiz.answered++;
            this.currentQuiz.currentQuestion++;
        },
        fetchData(quizes: Array<quizType>) {
            this.availableQuizes = quizes;
        }
    }
});