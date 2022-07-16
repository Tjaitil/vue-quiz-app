<template>
  <button class="focus-transition">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "button",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
button {
  width: 200px;
  padding: 20px;
  margin: 0.5rem;
  background-color: rgb(233, 162, 32);
  border: none;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}
</style>
