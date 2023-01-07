<template>
  <div ref="dropdownRef" class="dropdown">
    <div class="dropdown__toggle" @click="open = !open">
      <slot />
    </div>

    <transition>
      <div v-if="open" class="dropdown__menu">
        <div
          v-for="(item, index) in props.items"
          :key="index"
          class="dropdown__item"
          :class="{
            'dropdown__item--selected': props.modelValue === item.value,
          }"
          @click="updateValue(item.value)"
        >
          {{ item.title }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

export interface Item {
  title: string;
  value: any;
}

const props = defineProps<{
  modelValue: any; // Value of the Item.value
  items: Item[];
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: any): void;
}>();

const updateValue = (value: any) => {
  emit('update:modelValue', value);
  open.value = false;
};

const dropdownRef = ref<HTMLDivElement>();

const open = ref(false);

onClickOutside(dropdownRef, () => {
  open.value = false;
});

</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;
    display: inline-block;

    &__toggle {
        cursor: pointer;
    }

    &__menu {
        position: absolute;
        top: 100%;
        display: flex;
        flex-direction: column;
        gap: var(--spacer-1);
        width: fit-content;
        padding: var(--spacer-2);
        background-color: var(--color-grayscale-900);
        border-radius: var(--color-danger);
    }

    &__item {
        padding: var(--spacer-1);
        cursor: pointer;
        user-select: none;
        background-color: var(--color-grayscale-900);
        border-radius: var9;

        &:hover {
            background-color: #ccc;
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: .1s cubic-bezier(.34, 1.56, .64, 1);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-100%);
    transform-origin: top;
}
</style>
