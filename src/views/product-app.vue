<template>
  <section v-if="store">
    <h1>Products</h1>
    <product-list :products="products" :storeName="store.StoreName"/>
  </section>
</template>

<script>
import productList from '../cmps/product-list.vue';
import { productService } from '../services/productService.js';
export default {
  data() {
    return {
      store: null,
      products: null,
    };
  },
  components: {
    productList,
  },

  methods: {
    async loadStore() {
      const store = await productService.query();
      this.store = store;
      this.getProducts();
    },
    getProducts() {
      this.products = this.store.Products;
      console.log(this.products);
    },
  },

  created() {
    this.loadStore();
  },
};
</script>
