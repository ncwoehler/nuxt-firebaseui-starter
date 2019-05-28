<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>
<script>
import { fireAuth, authProviders } from '~/plugins/firebase'

export default {
  name: 'Login',

  mounted: function() {
    if (process.browser) {
      const firebaseui = require('firebaseui')
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(fireAuth)

      const config = {
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        signInOptions: [authProviders.Google, authProviders.Email],
        signInFlow: 'popup',
        tosUrl: '/tos',
        privacyPolicyUrl: '/privacy-policy',
        callbacks: {
          signInSuccessWithAuthResult: this.signInResult
        }
      }
      ui.disableAutoSignIn()
      if (this.$store.state.user) {
        this.openAppPage()
      } else {
        ui.start('#firebaseui-auth-container', config)
      }
    }
  },
  methods: {
    signInResult() {
      this.openAppPage()
      return false
    },
    openAppPage() {
      this.$router.push({
        path: '/app'
      })
    }
  }
}
</script>
<style src="~/node_modules/firebaseui/dist/firebaseui.css"></style>
