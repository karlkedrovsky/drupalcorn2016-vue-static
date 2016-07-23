<template>
  <h1>Demo Component</h1>
  <p class="red">{{ message }}</p>
</template>
<script>
 export default {
   name: "Demo",
   data() {
     return {
       message: "Woohoo!"
     }
   }
 }
</script>
<style>
  .red {
    color: #ee2222
  };
</style>
