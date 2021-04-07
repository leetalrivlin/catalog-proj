<template>
  <section v-if="stores">
    <h1 class="flex align-center justify-center product-header">Products</h1>
       <!-- <product-filter @filtered="setFilter" /> -->
    <product-list :products="products" />
  </section>
</template>

<script>
import productList from '../cmps/product-list.vue';
import { productService } from '../services/productService.js';
export default {
  data() {
    return {
      stores: null,
      products: null,
    };
  },
  components: {
    productList,
  },

  computed: {
    //   storeName() {
    //       return
    //   }
  },

  methods: {
    async loadStore() {
      const stores = await productService.query();
      this.stores = stores;
      this.getProducts();
    },
    getProducts() {
      const products = [];
      this.stores.forEach((store) => {
        const storeName = store.StoreName;
        store.Products.forEach((product) => {
          product.StoreName = storeName;
          products.push(product);
        });
      });
      this.products = products;
      console.log(this.products);
    },
  },

  created() {
    this.loadStore();
  },
};
</script>
