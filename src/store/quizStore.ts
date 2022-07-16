
import { defineStore } from "pinia";
import { Quiz } from "../types/Quiz"
import { QuizStoreState } from "./state-types/QuizStoreState";

// TODO: Research a better way to make availableQuizes static.
// Was not successfull with MakeRaw, readonly. JSON stringify is a little trick
export const useQuizStore = defineStore({
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
    } as QuizStoreState),
    getters: {
        getCurrentQuiz: state => state.currentQuiz,
        getAvailableQuizes: state => state.availableQuizes,
        getCurrentQuestion: state => state.currentQuiz.questions[state.currentQuiz.currentQuestion - 1],
    },
    actions: {
        setNewQuiz(quizID: number) {
            let newQuiz = this.availableQuizes.find(element => element.id === quizID);
            if(!newQuiz) return false;
            this.currentQuiz.id = newQuiz.id;
            this.currentQuiz.name = newQuiz.name;
            this.currentQuiz.questions = JSON.parse(JSON.stringify(newQuiz.questions));
        },
        cancelCurrentQuiz() {
            this.currentQuiz.id = 0;
            this.currentQuiz.questions = [];
            this.currentQuiz.name = "";
            this.currentQuiz.correctAnswered = 0;
            this.currentQuiz.finished = false;
        },
        updateResult(correct: boolean, answeredAlternative: number) {
            this.getCurrentQuestion.answeredAlternative = answeredAlternative;
            if(correct)  {
                this.currentQuiz.correctAnswered++;
            }
        },
        restartCurrentQuiz() {
            this.currentQuiz.finished = false;
            this.currentQuiz.correctAnswered = 0;
            this.currentQuiz.currentQuestion = 1;
        },
        setNextQuestion() {
            if(this.currentQuiz.currentQuestion === this.getCurrentQuiz.questions.length) {
                this.currentQuiz.finished = true; 
            } else {
                this.currentQuiz.answered++;
                this.currentQuiz.currentQuestion++;
            }
        },
        fetchData(quizes: Quiz[]) {
            this.availableQuizes = quizes;
        }
    }
});