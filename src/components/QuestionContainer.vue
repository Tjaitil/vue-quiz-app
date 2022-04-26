<template>
  <div id="question-container" class="mt-1">
    <div class="current-question mb-1">
      <h3>{{ question.number }}. {{ question.heading }}</h3>
      <ul>
        <li class="question"
          v-for="(alternative, index) in question.alternatives"
          :class="[getColorClass(index), { 'focus-transition': !selected}]"
          :key="alternative.id"
          @click="answerQuestion(index)"
        >
          {{ alternative.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    question: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      required: false,
    },
  },
  setup(props, context) {
    const selectedAlternative = ref(-1);
    const selected = ref(false);

    function getColorClass(index: number): string {
      if(!selected.value) return "";

      if (index === selectedAlternative.value && props.question.correct === index) {
        return "right-question";
      } else if (
        index === selectedAlternative.value &&
        props.question.correct !== index
      ) {
        return "wrong-question";
      } else if(index === props.question.correct) {
        return "right-question";
      } else {
        return "";
      }
    }
    function answerQuestion(alternativeIndex: number) {
      selectedAlternative.value = alternativeIndex;
      selected.value = true;
      context.emit("answerQuestion", alternativeIndex);
    }
    return {
      getColorClass,
      answerQuestion,
      selectedAlternative,
      selected,
    };
  }
});
</script>
<style>
#question-container {
  margin-bottom: 2rem;
}
ul {
  list-style-type: none;
}
.question {
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  background-color: rgb(0,115,255);
  max-width: 300px;
  padding: 1rem 0;
  margin: 0.5rem auto;
}
.right-question {
  background-color: rgb(8, 163, 8);
}
.wrong-question {
  background-color: rgb(199, 4, 4);
}
.question {
  font-weight: 700;
  color: #ffffff;
}
</style>
