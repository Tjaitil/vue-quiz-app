<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Quiz from "@/components/Quiz.vue";
</script>
<template>
  <Quiz />
  <footer class="mb-2">Developed by Kjetil Baksaas</footer>
</template>

<style>
:root {
  --buttonScale: 1.05;
}
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  height: 100%;
  background-color: #FFFDFD;
  font-size: 16px;
}
.focus-transition {
    transition: filter 0.5s ease-out, transform 0.5s ease-out;
}
.focus-transition:hover {
    filter: brightness(1.05);
    transform: scale(var(--buttonScale));
}
p {
  margin-bottom: 1rem;
}
h1, h2, h3 {
  margin-bottom: 1rem;
}
.mt-1 {
  margin-top: 1rem;
}
.mb-1 {
  margin-bottom: 1rem;
}
.mt-2 {
  margin-top: 2rem;
}
.mb-2 {
  margin-bottom: 2rem;
}
footer {
  margin-top: 4rem;
}
@media only screen and (min-width: 810px) {
  #app {
    margin-top: 4rem;
  }  
}
</style>
