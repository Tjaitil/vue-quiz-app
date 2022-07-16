<template>
  <div id="quiz-container">
    <div v-if="quizStore.getCurrentQuiz.id === 0" id="quiz-list">
      <h1 class="mb-2">Select your quiz</h1>
      <ul id="available-quizes-list">
        <li
          v-for="quiz in quizStore.availableQuizes"
          :key="quiz.id"
          class="available-quiz"
          @click="setNewQuiz(quiz.id)"
        >
          {{ quiz.name }}
        </li>
      </ul>
    </div>
    <div v-else class="current-quiz-container">
      <CurrentQuiz />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useQuizStore } from "../store/quizStore";
import quizes from "../data/quizes";
import CurrentQuiz from "@/components/CurrentQuiz.vue";
export default defineComponent({
  components: { CurrentQuiz },
  setup() {
    const quizStore = useQuizStore();
    // Fetch dummy data
    quizStore.fetchData(quizes);

    function setNewQuiz(id: number) {
      quizStore.setNewQuiz(id);
    }
    return {
      quizStore,
      setNewQuiz,
    };
  },
});
</script>

<style>
#quiz-container {
  max-width: 600px;
  margin: 35px auto 0;
}
#quiz-list {
  margin: 0 auto;
}
#available-quizes-list {
  list-style-type: none;
  width: 100%;
}
.available-quiz {
  cursor: pointer;
  width: 100%;
  padding: 1rem 0.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  background-color: darkorange;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease-out;
}
.available-quiz:hover {
  filter: brightness(1.1);
  transform: scale(1.05);
}
</style>
