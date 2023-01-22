<template>
  <h1>About</h1>
  <p>Demo app using <code>vite-plugin-ssr</code>.</p>
</template>

<style>
code {
  font-family: monospace;
  background-color: #eaeaea;
  padding: 3px 5px;
  border-radius: 4px;
}
</style>

<script setup>
import { ref } from 'vue';
const tttt = ref("bbbb")
documentProps.title = "bbb"
documentProps.description = "This is aaaaaaaaaaaaabout"

// defineExpose({
//     documentProps:{
//         title: "what ??!!",
//         description: "dddddddddddddddpage."
//     }
// })
</script>

<script>
export const documentProps = {
    title: "",
    description: "This is a about page."
}
</script>
