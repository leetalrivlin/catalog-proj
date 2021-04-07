<template>
  <section v-if="stores">
    <h1 class="flex align-center justify-center product-header">Products</h1>
    <product-filter @productsToShow="productsToShow" />
    <product-list :products="products" />
  </section>
</template>

<script>
import productList from "../cmps/product-list.vue";
import productFilter from "../cmps/product-filter.vue";
import { productService } from "../services/productService.js";
export default {
  data() {
    return {
      stores: null,
      products: null,
    };
  },
  components: {
    productList,
    productFilter,
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
    productsToShow(filterBy) {
      if (filterBy === "him") {
         const productsToShow = this.products.filter((product) => {
          product.ProductTags.includes(3);
        });
        console.log(productsToShow , 'filter');
        this.products = productsToShow
      }
    },
  },

  created() {
    this.loadStore();
  },
};
</script>
