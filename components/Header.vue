<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/" class="flex-center">
      <Logo class="logo"></Logo>
      nuxt-firebaseui-starter
    </b-navbar-brand>

    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/app">App</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
      <no-ssr>
        <b-navbar-nav class="ml-auto">
          <div class="flex-center right-margin">
            <template v-if="activeUser">
              <b-nav-item-dropdown :text="activeUser.displayName" right>
                <b-dropdown-item @click="logout">Logout</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-img
                :src="picture"
                center
                class="mt-1, logo"
                rounded="circle"
              />
            </template>
            <template v-else>
              <b-nav-item to="/login">Login</b-nav-item>
            </template>
          </div>
        </b-navbar-nav>
      </no-ssr>
    </b-collapse>
  </b-navbar>
</template>
<style>
.logo {
  max-height: 30px;
  max-width: 30px;
  margin-right: 5px;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-margin {
  margin-right: 10px;
}
</style>
<script>
import dotProp from 'dotprop'
import Logo from '@/assets/nuxt-logo.svg'

export default {
  components: {
    Logo
  },
  computed: {
    activeUser() {
      return this.$store.state.user
    },
    picture() {
      return (
        dotProp(this.activeUser, 'photoURL') ||
        dotProp(this.activeUser, 'picture') || // OpenID
        dotProp(this.activeUser, 'picture.data.url') || // Facebook graph API
        dotProp(this.activeUser, 'avatar_url') // GitHub
      )
    }
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
