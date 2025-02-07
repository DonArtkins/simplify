<template>
  <div class="task-item">
    <input type="checkbox" v-model="task.completed" @change="updateTask" />
    <span :class="{ completed: task.completed }">{{ task.title }}</span>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script setup>
import { defineProps, inject } from "vue";
import { useTaskStore } from "@/stores/task";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const taskStore = useTaskStore();

const updateTask = () => {
  taskStore.updateTask(props.task);
};

const deleteTask = () => {
  taskStore.deleteTask(props.task.id);
};
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
