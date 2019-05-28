<template>
  <div>
    <b-alert show variant="warning">This is a secure page!</b-alert>
    <FireStoreTest></FireStoreTest>
  </div>
</template>

<script>
import FireStoreTest from '@/components/FireStoreTest'
export default {
  components: {
    FireStoreTest
  }
}
</script>
