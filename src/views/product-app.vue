<template>
  <section v-if="products">
    <h1 class="flex align-center justify-center product-header">Products</h1>
    <product-filter @productsToShow="productsToShow" />
    <product-list :products="products" />
  </section>
</template>

<script>
import productList from '../cmps/product-list.vue';
import productFilter from '../cmps/product-filter.vue';
import { productService } from '../services/productService.js';
export default {
  data() {
    return {
      products: null,
    };
  },
  components: {
    productList,
    productFilter,
  },
  methods: {
    async loadProducts() {
      const products = await productService.query();
      this.products = products;
    },
    productsToShow(filterBy) {
      if (filterBy === 'him') {
        const productsToShow = this.products.filter((product) => {
          product.ProductTags.includes(3);
        });
        console.log(productsToShow, 'filter');
        this.products = productsToShow;
      }
    },
  },

  created() {
    this.loadProducts();
  },
};
</script>
