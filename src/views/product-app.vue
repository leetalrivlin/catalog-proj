<template>
  <section>
      <h1>Products</h1>
      <product-list />
  </section>
</template>

<script>
import productList from '../cmps/product-list.vue';
export default {
components: {
    productList,
}
}
</script>