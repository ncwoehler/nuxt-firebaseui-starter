<template>
  <div class="mainbody">
    <Header class="no-flex-grow"></Header>
    <b-container class="flew-grow mt-4">
      <nuxt></nuxt>
    </b-container>
    <Footer class="no-flex-grow"></Footer>
  </div>
</template>
<style scoped>
.mainbody {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.no-flex-grow {
  flex-grow: 0;
}
.flew-grow {
  flex: 1;
}
</style>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
