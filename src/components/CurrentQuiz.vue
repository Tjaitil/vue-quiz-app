<template>
  <div v-if="!quizStore.currentQuiz.finished">
    <h2>Current quiz - <i>{{ quizStore.getCurrentQuiz.name }}</i></h2>
    <p>
      Progress {{ quizStore.getCurrentQuiz.currentQuestion }} /
      {{ quizStore.getCurrentQuiz.questions.length }}
    </p>
    <transition name="question-trans" mode="out-in">
      <Component :is="questionComponent"
        :question="quizStore.getCurrentQuestion"
        :summaryToggled="false"
        @update-result="updateResult"
        :key="quizStore.getCurrentQuestion.number"
      ></Component>
    </transition>
    <BaseButton @click="cancelCurrentQuiz" :text="'Quit quiz'" />
    <BaseButton v-if="showNextQuestion" @click="getNextQuestion()" :text="'Next Question'" />
  </div>
  <div v-else>
    <QuizSummary />
  </div>
</template>

<script lang="ts">
import QuizSummary from "@/components/QuizSummary.vue";
import { defineComponent, ref } from "vue";
import { useQuizStore } from "../store/quizStore";
import { useGetQuestionComponent} from "../composables/getQuestionComponent";
import TextQuestion from "./question-types/TextQuestion.vue";

export default defineComponent({
  components: {
    QuizSummary,
    TextQuestion
  },
  setup() {
    const quizStore = useQuizStore();
    const showNextQuestion = ref(false);
    const { getQuestionComponent } = useGetQuestionComponent();
    const questionComponent = getQuestionComponent(quizStore.getCurrentQuestion.type);


    function updateResult(correct: boolean, answeredAlternativeID: number) {
      showNextQuestion.value = true;
      quizStore.updateResult(correct, answeredAlternativeID);
    }

    function getNextQuestion() {
      quizStore.setNextQuestion();
      showNextQuestion.value = false;
    }

    function cancelCurrentQuiz() {
      quizStore.cancelCurrentQuiz();
    }

    return {
      quizStore,
      questionComponent,
      showNextQuestion,
      updateResult,
      getNextQuestion,
      cancelCurrentQuiz,
    };
  },
});
</script>

<style>
.question-trans-enter-from,
.question-trans-leave-to {
  opacity: 0;
}
.question-trans-enter-active,
.question-trans-leave-active {
  transition: 0.4s ease-out;
}
.question-trans-enter-to,
.question-trans-leave-from {
  opacity: 1;
}
</style>
