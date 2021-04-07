<template>
  <form @submit.prevent class="flex justify-center product-filter-container">
    <select name="Gender" v-model="filterBy.gender" @change="setFilter" class="gender-select">
      <option value="him">Him</option>
      <option value="her">Her</option>
      <option value="all">Both</option>
    </select>
    <select name="Price" v-model="filterBy.price" @change="setFilter">
      <option value="23">Up to 25$</option>
      <option value="25">25$ - 50$</option>
      <option value="26">50$ - 75$</option>
      <option value="27">75$ - 100$</option>
      <option value="32">100$ +</option>
      <option value="all">All</option>
    </select>
  </form>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        gender: 'all',
        price: 'all'
      },
    };
  },

  methods: {
    setFilter() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy.gender));
      // const filterBy = [...this.filterBy.gender, ...this.filterBy.price];
      // const filterBy = [JSON.parse(...this.filterBy.gender)];
      console.log('filterBy',filterBy);
      this.$emit('productsToShow', filterBy);
    },
  },
};
</script>
