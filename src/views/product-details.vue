<template>
  <section v-if="product" class="main-layout details-container">
    <router-link to="/product" class="back-btn"> back</router-link>
    <div class="flex justify-center details">
      <img :src="product.ProductImage" alt="" @error="replaceByDefault" />
      <div class="flex column details-info">
        <h1>{{ product.ProductTitle }}</h1>
        <small>{{ product.Description }}</small>
      </div>
    </div>
  </section>
</template>

<script>
import { productService } from '../services/productService';
export default {
  data() {
    return {
      product: null,
    };
  },
  methods: {
    async loadProduct(productId) {
      const product = await productService.getById(productId);
      console.log('product', product);
      this.product = product;
    },
    replaceByDefault(e) {
      e.target.src = require('@/assets/imgs/default-img.jpg');
    },
  },
  created() {
    const productId = this.$route.params.productId;
    this.loadProduct(productId);
  },
};
</script>
