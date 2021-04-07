<template>
  <div id="app" class="flex column main-app">
    <main-header />
    <router-view/>
  </div>
</template>

<script>
import mainHeader from '@/cmps/main-header.vue'
export default {
  components: {
    mainHeader
  },
}
</script>