<script setup>
import { ref } from "vue";
import { useTaskStore } from "@/stores/task";

const title = ref("");
const description = ref("");
const taskStore = useTaskStore();
const titleError = ref(false); // New ref for title error
const errorId = ref("title-error"); // unique ID for the error message

const handleSubmit = () => {
  if (title.value) {
    titleError.value = false; // Reset error state if title is present
    taskStore.addTask({ title: title.value, description: description.value });
    title.value = "";
    description.value = "";
  } else {
    titleError.value = true; // Set error if title is empty
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <h1>Add New Task</h1>

    <div class="form-group">
      <label for="title">Task Title:</label>
      <input
        type="text"
        id="title"
        v-model="title"
        placeholder="Enter your task title here..."
        @input="titleError = false"
        :aria-describedby="titleError ? errorId : null"
      />
      <div v-if="titleError" class="error-message" :id="errorId" role="alert">
        <i class="fa fa-exclamation-triangle"></i>
        <span>Please fill out this field.</span>
      </div>
    </div>

    <div class="form-group">
      <label for="description">Task Description:</label>
      <textarea
        id="description"
        v-model="description"
        placeholder="Enter your task description here..."
      ></textarea>
    </div>

    <button type="submit">Add Task</button>
  </form>
</template>

<style scoped>
.task-form {
  background: transparent;
  backdrop-filter: blur(20px);
  border-top-left-radius: 90px;
  border-bottom-right-radius: 90px;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.task-form h1 {
  color: var(--primary);
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Form Group Styles for Spacing */
.form-group {
  text-align: left;
  display: flex;
  flex-direction: column;
}

.form-group label {
  color: var(--primary);
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 0.9rem;
}

/* Error Message Styles */
.error-message {
  background-color: rgba(255, 0, 0, 0.1); /* Light red background */
  color: rgb(255, 0, 0); /* Red text */
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  text-align: left;
  margin-top: 5px; /* Space between input and error message */
}

.error-message i {
  font-size: 1rem;
}

.task-form input,
.task-form textarea {
  width: 100%;
  border: 1px solid var(--accent);
  background: transparent;
  color: var(--primary);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.task-form input {
  border-radius: 30px;
  padding: 12px 20px;
  outline: none;
}

.task-form textarea {
  border-radius: 10px;
  padding: 12px 20px;
  outline: none;
  resize: none;
  height: 100px;
  font-family: inherit;
}

.task-form input::placeholder,
.task-form textarea::placeholder {
  color: var(--primary);
  opacity: 0.7;
}

.task-form button {
  border-radius: 30px;
  padding: 12px 30px;
  border: 1px solid transparent;
  background: var(--primary);
  color: var(--accent);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 1rem;
  width: 100%;
  max-width: 200px;
  align-self: center;
}

.task-form button:hover {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--primary);
}

/* Media Queries */
@media screen and (max-width: 768px) {
  .task-form {
    padding: 40px 30px;
    border-top-left-radius: 60px;
    border-bottom-right-radius: 60px;
    gap: 15px;
  }

  .task-form h1 {
    font-size: 1.75rem;
  }
}

@media screen and (max-width: 480px) {
  .task-form {
    padding: 30px 20px;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    gap: 12px;
  }

  .task-form h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .task-form input {
    padding: 10px 16px;
    font-size: 0.9rem;
  }

  .task-form textarea {
    padding: 10px 16px;
    height: 80px;
    font-size: 0.9rem;
  }

  .task-form button {
    padding: 10px 24px;
    font-size: 0.9rem;
    max-width: 160px;
  }
}

/* Handle very small devices */
@media screen and (max-width: 320px) {
  .task-form {
    padding: 20px 15px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .task-form h1 {
    font-size: 1.25rem;
  }

  .task-form input,
  .task-form textarea {
    font-size: 0.85rem;
  }

  .error-message {
    font-size: 0.75rem;
    padding: 6px 10px;
  }

  .error-message i {
    font-size: 0.85rem;
  }
}
</style>
