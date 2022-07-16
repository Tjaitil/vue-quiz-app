<template>
  <div class="mb-2">
    <h3>{{ question.number }}. {{ question.heading }}</h3>
    <ul>
      <TextAlternative
        v-for="(alternative, index) in question.alternatives"
        class="alternative"
        :class="[
          selectedAlternative ? getAlternativeColor(alternative.id, alternative.correct, selectedAlternative) : '',
          { 'focus-transition': !selected },
        ]"
        @click="answerQuestion(alternative.id)"
        :key="alternative.id"
        :alternative="alternative"
      >
      </TextAlternative>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Question } from "../../types/Quiz";
import TextAlternative from "../question-alternatives/TextAlternative.vue";
import { useGetAlternativeColor } from "../../composables/getAlternativeColor";

export default defineComponent({
  name: "TextQuestion",
  components: {
    TextAlternative,
  },
  props: {
    question: {
      type: Object as PropType<Question>,
      required: true,
    },
    summaryToggled: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, context) {
    const selectedAlternative = ref();
    
    if(props.question.answeredAlternative !== -1) {
      selectedAlternative.value = props.question.answeredAlternative;
    }
    const selected = ref(false);

    const { getAlternativeColor } = useGetAlternativeColor();

    function answerQuestion(answeredAlternativeID: number) {
      if (props.summaryToggled || selected.value) return;
      selected.value = true;
      
      selectedAlternative.value = answeredAlternativeID;

      const currentQuestion = props.question.alternatives;
      // Validate question

      const alternative = currentQuestion.find((alternative) => alternative.id === selectedAlternative.value);
      if (!alternative) return false;

      const correct = alternative.correct ? true : false;
      context.emit("update-result", correct, selectedAlternative.value);
    }

    return {
      getAlternativeColor,
      answerQuestion,
      selectedAlternative,
      selected,
    };
  },
});
</script>

<style scoped>
.alternative {
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  background-color: rgb(0, 115, 255);
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
</style>
