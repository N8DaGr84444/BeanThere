<template>
  <div class="cost-scale">
    <div
      v-for="level in levels"
      :key="level.value"
      class="cost-scale-item"
      :class="{ active: level.value === selected }"
      @click="emit('update:modelValue', level.value)"
    >
      <span>{{ level.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: number;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

// Define cost levels
const levels = [
  { value: 1, label: "$" },
  { value: 2, label: "$$" },
  { value: 3, label: "$$$" },
];

const selected = computed(() => props.modelValue);
</script>

<style scoped>
.cost-scale {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
}

.cost-scale-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: var(--ion-color-medium);
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.cost-scale-item.active {
  color: var(--ion-color-primary);
  background-color: rgba(var(--ion-color-primary-rgb), 0.1);
}
</style>
