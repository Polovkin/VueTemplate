<template>
  <div class="container">
    <div class="elem"></div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {}
}
</script>
<style lang="scss">
.container {
  position: relative;
  background-color: red;
  color: #fff;

  &:after {
    @include breakpoint($width__desktop-hd) {
      content: '4k';
    }
    @include breakpoint($width__desktop-hd-min) {
      content: 'max width: #{$max-width__desktop-hd-min} width togge: #{$width__desktop-hd-min}';
    }
    //@include breakpoint($width__laptop) {
    //  content: 'max width: #{$max-width__desktop-min}  width togge: #{$width__laptop}';
    //}
    //@include breakpoint($width__tablet-land) {
    //  content: 'max width: #{$max-width__tablet-land}  width togge: #{$width__tablet-land}';
    //}
    //@include breakpoint($width__tablet-port) {
    //  content: 'max width: #{$max-width__tablet-port}  width togge: #{$width__tablet-port}';
    //}
    //@include breakpoint($width__mobile-max) {
    //  content: 'max width: #{$max-width__mobile-max}  width togge: #{$width__mobile-max}';
    //}
  }
}

.elem {
  position: relative;


  &:after {
    color: $color__light;
    font-weight: bold;
    padding: 60px;
    display: block;
    text-transform: uppercase;
    background-color: red;
    font-size: 40px;

    @include breakpoint($desktop__laptop) {
      content: 'desktop__laptop';
      background-color: aqua;
    }
    @include breakpoint($desktop__laptop-min) {
      content: 'desktop__laptop-min';
      background-color: tomato;
    }
    @include breakpoint($tablet__all) {
      content: 'tablet__all';
      background-color: #2c7967;
    }
    @include breakpoint($tablet__landscape-large) {
      content: 'tablet__landscape large';
      background-color: #832c7f;
    }
    @include breakpoint($tablet__landscape) {
      content: 'tablet__landscape';
      background-color: blue;
    }
    @include breakpoint($tablet__portrait) {
      content: 'tablet__portrait';
      background-color: forestgreen;
    }

  }

}
</style>
