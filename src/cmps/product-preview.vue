<template>
  <li class="flex column align-center product-preview-container">
    <img :src="product.ProductImage" alt="" />
    <p>{{ storeName }}</p>
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
    storeName: {
      type: String,
    },
  },
};
</script>
