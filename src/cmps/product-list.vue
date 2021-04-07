<template>
  <ul v-if="products" class="clean-list product-list-container">
    <product-preview
      v-for="product in products"
      :key="product.ProductId"
      :product="product"
    />
  </ul>
</template>

<script>
import productPreview from './product-preview.vue';
export default {
  components: {
    productPreview,
  },
  props: {
    products: {
      type: Array,
    },
  },
};
</script>
