
import { defineStore } from "pinia";
import { quizType, quizState } from "../data/types"


export const useStore = defineStore({
    id: "quizStore",
    state: () =>
    ({
        availableQuizes: [],
        currentQuiz: {
            id: 0,
            name: "",
            answered: 0,
            correctAnswered: 0,
            currentQuestion: 1,
            questions: [],
            finished: false
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
            this.currentQuiz.name = newQuiz.name;
            this.currentQuiz.questions = newQuiz.questions;
        },
        cancelCurrentQuiz() {
            this.currentQuiz.id = 0;
            this.currentQuiz.questions = [];
        },
        updateCorrect(correct: boolean) {
            if(correct) this.currentQuiz.correctAnswered++;
        },
        restartCurrentQuiz() {
            this.currentQuiz.finished = false;
            this.currentQuiz.correctAnswered = 0;
            this.currentQuiz.currentQuestion = 1;
        },
        nextQuestion() {
            if(this.currentQuiz.currentQuestion === this.getCurrentQuiz.questions.length) {
                this.currentQuiz.finished = true; 
            } else {
                this.currentQuiz.answered++;
                this.currentQuiz.currentQuestion++;
            }
        },
        fetchData(quizes: Array<quizType>) {
            this.availableQuizes = quizes;
        }
    }
});