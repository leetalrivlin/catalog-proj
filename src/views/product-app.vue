<template>
  <section v-if="products" class="main-layout product-app-container">
    <h1 class="product-header">
      Products
    </h1>
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
    async productsToShow(filterBy) {
      await this.loadProducts();
      var tag;
      var productsToShow;
      switch (filterBy) {
        case 'him':
          tag = 3;
          break;
        case 'her':
          tag = 4;
          break;
        case 'both':
          tag = 'all';
          break;
        default:
          tag = 'all';
      }
      console.log('tag', tag);
      if (tag === 'all') return;
      productsToShow = this.products.filter((product) => {
        return product.ProductTags.includes(tag);
      });
      console.log('productsToShow', productsToShow);
      this.products = productsToShow;
    },
  },

  created() {
    this.loadProducts();
  },
};
</script>
