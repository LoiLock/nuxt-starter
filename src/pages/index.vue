<template>
  <div>
    test
  </div>

  <div
    class=""
    :class="className"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const className = ref('cool-class');
</script>

<style lang="scss" scoped>

</style>
