<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="title">Task Title:</label>
      <input
        type="text"
        id="title"
        v-model="title"
        placeholder="Task title"
        required
      />
    </div>

    <div>
      <label for="description">Task Description:</label>
      <textarea
        id="description"
        v-model="description"
        placeholder="Task description"
      ></textarea>
    </div>

    <button type="submit">Add Task</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "@/stores/task";

const title = ref("");
const description = ref("");
const taskStore = useTaskStore();

const handleSubmit = () => {
  if (title.value) {
    taskStore.addTask({ title: title.value, description: description.value });
    title.value = "";
    description.value = "";
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}

div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Important: prevents padding from increasing the overall width */
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}
</style>
