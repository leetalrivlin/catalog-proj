<template>
  <section>
    <h1>Products</h1>
    <product-list />
  </section>
</template>

<script>
import productList from "../cmps/product-list.vue";
import { productService } from '../services/productService.js';
export default {
  data() {
    return {
      products: null,
    };
  },
  components: {
    productList,
  },

  methods: {
    async loadProducts() {
      const products = await productService.query();
      this.products = products;
      console.log(this.products);
    },
  },

  created() {
    this.loadProducts();
  },
};
</script>