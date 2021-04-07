<template>
 <router-link :to="'/product/' + product.ProductId">
  <li class="flex column align-center product-preview-container">
    <img :src="product.ProductImage" alt="" @error="replaceByDefault"/>
    <p>{{ product.StoreName }}</p>
    <p>{{ product.PriceLabel }}</p>
    <small>{{ product.ProductTitle }}</small>
  </li>
  </router-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
    methods: {
    replaceByDefault(e) {
      e.target.src = require("@/assets/imgs/default-img.jpg");
    }
  }
};
</script>
