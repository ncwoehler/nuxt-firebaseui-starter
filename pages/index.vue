<template>
  <div>
    <b-jumbotron class="text-center">
      <Logo class="logo"></Logo>
      <h3>Welcome to nuxt-firebaseui-starter</h3>
      <div class="mt-1">
        <template v-if="$store.state.user">
          <b-btn class="ml-3" variant="info" to="/app">Open App</b-btn>
          <b-btn class="ml-3" variant="danger" @click="logout()">
            Logout
          </b-btn>
        </template>
        <b-btn v-else variant="success" to="/login">Login</b-btn>
      </div>
    </b-jumbotron>
  </div>
</template>
<style scoped>
.logo {
  max-width: 50%;
  max-height: 200px;
}
</style>
<script>
import Logo from '@/assets/nuxt-logo.svg'

export default {
  components: {
    Logo
  },
  methods: {
    logout() {
      this.$store.dispatch('signOut').then(() => {
        this.$router.replace({ path: '/' })
      })
    }
  }
}
</script>
