<template>
  <main>
    <h1>Simplify.</h1>
    <TaskForm />

    <div v-if="taskStore.loading">Loading tasks...</div>
    <div v-else-if="taskStore.error">Error: {{ taskStore.error.message }}</div>
    <div v-else>
      <h2>Pending Tasks</h2>
      <TaskItem
        v-for="task in taskStore.pendingTasks"
        :key="task.id"
        :task="task"
      />

      <h2>Completed Tasks</h2>
      <TaskItem
        v-for="task in taskStore.completedTasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </main>
</template>

<script setup>
import TaskForm from "@/components/TaskForm.vue";
import TaskItem from "@/components/TaskItem.vue";
import { onMounted } from "vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();

onMounted(() => {
  taskStore.fetchTasks();
});
</script>

<style scoped>
main {
  padding: 20px;
  font-family: sans-serif;
}
</style>
