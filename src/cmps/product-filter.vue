<template>
  <form @submit.prevent class="flex justify-center product-filter-container">
    <select name="Gender" v-model="filterBy.gender" @change="setFilter" class="gender-select">
      <option value="him">Him</option>
      <option value="her">Her</option>
      <option value="both">Both</option>
    </select>
  </form>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        gender: 'both',
      },
    };
  },

  methods: {
    setFilter() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy.gender));
      this.$emit('productsToShow', filterBy);
    },
  },
};
</script>
