<template>
  <div>
    <custom-dropdown v-model="selectedItem" :items="items">
      <button class="test-button" type="button">
        test
      </button>
    </custom-dropdown>
  </div>

  currently selected item:
  {{ selectedItem }}
</template>

<script lang="ts" setup>
import type { Item } from '@/components/CustomDropdown.vue';
import { ref } from 'vue';

const selectedItem = ref(null);

const items: Item[] = [
  {
    title: 'First cool item',
    value: 'wajo gek'
  },
  {
    title: 'Second item',
    value: 'yooo wtf'
  }
];
</script>

<style lang="scss" scoped>
.test-button {
    color: black;
}
</style>
