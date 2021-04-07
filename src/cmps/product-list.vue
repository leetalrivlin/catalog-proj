<template>
  <section>
    <h1>Product list</h1>
    <ul>
      <li>
        <product-preview />
      </li>
    </ul>
  </section>
</template>

<script>
import productPreview from './product-preview.vue';
export default {
  components: {
    productPreview,
  },
};
</script>
