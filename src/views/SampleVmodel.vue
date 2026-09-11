<template>
  <div>
    <input v-model="name" placeholder="Enter your name">

    <h2>Hello {{ name }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    }
  }
}
</script>