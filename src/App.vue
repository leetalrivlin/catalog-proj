<template>
  <div id="app flex column">
    <main-header />
    <router-view/>
  </div>
</template>

<script>
import mainHeader from '@/cmps/main-header.vue'
export default {
  components: {
    mainHeader
  }
}
</script>