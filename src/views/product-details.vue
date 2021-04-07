<template>
  <section v-if="product" class="main-layout details-container">
    <router-link to="/product" class="back-btn">&larr;</router-link>
    <div class="flex justify-center align-start details">
      <img :src="product.ProductImage" alt="" @error="replaceByDefault" />
      <div class="flex column details-info">
        <h1>{{ product.ProductTitle }}</h1>
        <p>{{ product.PriceLabel }}</p>
        <p>Store: {{ product.StoreName }}</p>
        <div>
          <small class="desc">{{ shortTxt }}</small>
          <small v-if="isShow">{{ moreTxt }}</small>
          <span class="read-more" @click="toggleIsShow">...</span>
        </div>
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
      isShow: false,
    };
  },
  computed: {
    shortTxt() {
      return this.product.Description.substr(0, 99);
    },
    moreTxt() {
      return this.product.Description.substr(
        99,
        this.product.Description.length - 1
      );
    },
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
    toggleIsShow() {
      this.isShow = !this.isShow;
    },
  },
  created() {
    const productId = this.$route.params.productId;
    this.loadProduct(productId);
  },
};
</script>
