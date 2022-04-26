<template>
  <div v-if="!quizStore.currentQuiz.finished">
    <h2>Current quiz: {{ quizStore.getCurrentQuiz.name }}</h2>
    <p>
      Progress {{ quizStore.getCurrentQuiz.currentQuestion }} /
      {{ quizStore.getCurrentQuiz.questions.length }}
    </p>
    <transition name="question-trans" mode="out-in">
      <question-container
        :question="quizStore.getCurrentQuestion"
        :key="quizStore.getCurrentQuiz.currentQuestion"
        @answerQuestion="checkAnswer"
      />
    </transition>
    <base-button v-if="showNextQuestion" @click="nextAnswer()" :text="'Next Question'"/>
    <base-button @click="cancelCurrentQuiz" :text="'Quit quiz'"/>
  </div>
  <div v-else>
    <quiz-summary />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "../store/quizStore";
import QuestionContainer from "@/components/questionContainer.vue";
import QuizSummary from "@/components/QuizSummary.vue";

export default defineComponent({
  components: {
    QuestionContainer,
    QuizSummary,
  },
  setup() {
    const quizStore = useStore();
    const currentQuestion = quizStore.getCurrentQuestion;
    const showNextQuestion = ref(false);
    function checkAnswer(alternative: number) {
      showNextQuestion.value = true;
      let correctIndex = currentQuestion.correct;
      let correct = false;
      if (alternative === correctIndex) {
        correct = true;
        quizStore.updateCorrect(correct);
      }
    }
    function nextAnswer() {
      quizStore.nextQuestion();
      showNextQuestion.value = false;
    }

    function cancelCurrentQuiz() {
      quizStore.cancelCurrentQuiz();
    }

    return {
      quizStore,
      showNextQuestion,
      checkAnswer,
      nextAnswer,
      cancelCurrentQuiz
    };
  }
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
