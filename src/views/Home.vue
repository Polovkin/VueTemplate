<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {}
}
</script>
<style lang="scss">
h1 {
  color: $color__primary;
  @include breakpoint($phone__all) {
    color: green;
  }
  @include breakpoint($tablet__all) {
    color: #42b983;
  }
  @include breakpoint($desktop__laptop) {
    color: #2c3e50;
  }
}
</style>
