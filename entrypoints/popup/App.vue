<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';

function openOptionsPage() {
  browser.runtime.openOptionsPage();
}
</script>

<template>
  <div class="mt-6 flex justify-center">
    <button @click="openOptionsPage"
      class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center gap-2">
      <span class="material-icons">settings</span>
      Config AI
    </button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #54bc4ae0);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
