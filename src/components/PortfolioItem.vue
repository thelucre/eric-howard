<template lang="jade">
.block.portfolio-item
  visual(:image='image'
    load='visible'
    offset='200')

</template>

<script>
export default {
  name: 'portfolio-item',

  props: ['image'],

}
</script>

<style lang="stylus" >
.portfolio-item

  .vv-image
    width 100%
</style>
