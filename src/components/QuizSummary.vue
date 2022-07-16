<template>
  <h1 class="mb-1">Quiz finished!</h1>
  <p class="mb-1">
    You managed {{ quizStore.currentQuiz.correctAnswered }} of {{ quizStore.currentQuiz.questions.length }} correct (
    {{ percentageCorrect }}% )
  </p>

  <div v-for="question in quizStore.currentQuiz.questions" :key="question.number">
    <Component
      :is="getQuestionComponent(question.type)"
      :question="question"
      :summaryToggled="true"
      class="mb-1"
    />
  </div>
  <BaseButton @click="restartCurrentQuiz()" :text="'Restart'" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGetQuestionComponent } from "../composables/getQuestionComponent";
import { useQuizStore } from "../store/quizStore";
import TextQuestion from "./question-types/TextQuestion.vue";

export default defineComponent({
  components: {
    TextQuestion,
  },
  setup() {
    const quizStore = useQuizStore();
    const currentQuestion = quizStore.getCurrentQuestion;
    const finishedQuiz = quizStore.currentQuiz;

    const { getQuestionComponent } = useGetQuestionComponent();
    const questionComponent = getQuestionComponent(currentQuestion.type);

    const percentageCorrect = +(
      (quizStore.currentQuiz.correctAnswered / quizStore.currentQuiz.questions.length) *
      100
    ).toFixed(2);

    function restartCurrentQuiz() {
      quizStore.restartCurrentQuiz();
    }
    return {
      quizStore,
      finishedQuiz,
      percentageCorrect,
      restartCurrentQuiz,
      getQuestionComponent,
      questionComponent,
    };
  },
});
</script>

<style scoped></style>
