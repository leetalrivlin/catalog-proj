<template>
  <li class="flex column align-center product-preview-container">
    <img :src="product.ProductImage" alt="" />
    <p>{{ product.StoreName }}</p>
    <p>{{ product.PriceLabel }}</p>
    <p>{{ product.ProductTitle }}</p>
  </li>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  computed: {
    productImg() {
      return this.product.ProductImage ? product.ProductImage : 'require(~@/assets/imgs/default-img.jpg)'
    }
  }
};
</script>
