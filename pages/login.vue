<template>
  <b-container>
    <no-ssr>
      <firebase-ui />
    </no-ssr>
  </b-container>
</template>
<style>
li {
  list-style-type: none;
}
</style>
<script>
import FirebaseUi from '~/components/FirebaseUi'
export default {
  name: 'Login',
  components: {
    FirebaseUi
  }
}
</script>
