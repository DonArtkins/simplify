<template>
  <div class="task-item">
    <label class="checkbox-container">
      <input
        type="checkbox"
        v-model="task.completed"
        @change="updateTask"
        class="hidden-checkbox"
      />
      <span class="custom-checkbox"></span>
    </label>
    <span class="task-text" :class="{ completed: task.completed }">
      {{ task.title }}
    </span>
    <button class="delete-btn" @click="deleteTask">Delete</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
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
  width: 100%;
  gap: 12px;
  padding: 8px 12px;
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.task-item:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Checkbox styling */
.checkbox-container {
  position: relative;
  display: inline-block;
  min-width: 20px;
  height: 20px;
  cursor: pointer;
  flex-shrink: 0;
}

.hidden-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.custom-checkbox {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 2px solid var(--primary);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.hidden-checkbox:checked + .custom-checkbox {
  background-color: var(--secondary);
  border-color: var(--secondary);
}

.hidden-checkbox:checked + .custom-checkbox::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid var(--text-lt);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Task text styling */
.task-text {
  flex: 1;
  min-width: 0; /* Allows text to truncate properly */
  color: var(--text-lt);
  font-size: 16px;
  transition: all 0.3s ease;
  white-space: normal; /* Allow text to wrap */
  overflow: visible; /* Show all text */
  text-overflow: clip; /* Don't use ellipsis */
  word-break: break-word; /*Break long words */
  margin-right: 8px;
}

.completed {
  text-decoration: line-through;
  color: rgba(245, 245, 245, 0.5);
}

/* Delete button styling */
.delete-btn {
  background-color: transparent;
  color: var(--text-lt);
  border: 1px solid var(--accent);
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  flex-shrink: 0;
  white-space: nowrap;
}

.delete-btn:hover {
  background-color: var(--accent);
  color: var(--text-lt);
}

@media (max-width: 768px) {
  .task-item {
    padding: 6px 10px;
  }

  .task-text {
    font-size: 14px;
  }

  .delete-btn {
    padding: 3px 10px;
    font-size: 12px;
  }
}
</style>
