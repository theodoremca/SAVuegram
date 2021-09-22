<template>
<div :class="'spacer'+' '+classes" data-height="80" :style="`height: ${size.toString()}px`"></div>
</template>

<script>


export default {
  props: ['size','classes'],
  data() {
    return {
 
    }
  },
  methods: {

  }
}
</script>
