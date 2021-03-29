<template>
  <div class="other-container" style="width: 300px; margin: 0 auto;">
    <card
        v-for="(item, index) in cardList"
        :key="index"
        :header="item.header"
        :pic="item.pic"
        :article="item.article"
        :footer="item.footer"
    />
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      cardList: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      const list = [];
      let num = 375;
      while (num-- > 0) {
        list.push({
          header: `Header-${num}`,
          pic: `https://picsum.photos/220/300?random=${num}`,
          article: `哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或`,
          footer: `Footer-${num}`
        })
      }
      this.cardList = list
    })
  }
}
</script>

<style scoped lang="scss">
  .other-container{
    scroll-behavior:smooth;
  }
</style>
