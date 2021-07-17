<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product, index) in saleProducts" v-bind:key="index">
        <span class="name"> {{ product.name }}</span>
        <span class="price"> {{ product.price }}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice(5)">商品降价</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(["saleProducts"]),

    // saleProducts() {
    //   return this.$store.getters.saleProducts;
    // },
  },
  methods: {
    ...mapActions([
      "reducePrice", //同理41行
    ]),

    /*  this.$store.state.products.forEach((product) => {
         product.price -=1;
       });*/
    // this.$store.commit('reducePrice2')},//调用store里的mutations的reducePrice
    //this.$store.dispatch("reducePrice")},

    // reducePrice(mount) {this.$store.dispatch('reducePrice1',mount)},
  },
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
  list-style-type: none;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>
