<template>
  <h1 class="mb-1">Quiz finished! Your results</h1>
  <p class="mb-1"> Correct {{ quizStore.currentQuiz.correctAnswered }} of {{ quizStore.currentQuiz.questions.length }} ( {{ percentageCorrect }}% )</p>
  <base-button @click="restartCurrentQuiz()" :text="'Restart'" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../store/quizStore";

export default defineComponent({
  components: { },
  setup() {
    const quizStore = useStore();

    const percentageCorrect = +((quizStore.currentQuiz.correctAnswered / quizStore.currentQuiz.questions.length) * 100).toFixed(2);

    function restartCurrentQuiz() {
      quizStore.restartCurrentQuiz();
    }
    return {
        quizStore,
        percentageCorrect,
        restartCurrentQuiz
    };
  },
});
</script>

<style scoped></style>
