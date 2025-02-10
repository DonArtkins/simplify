<script setup>
import TaskForm from "@/components/TaskForm.vue";
import TaskItem from "@/components/TaskItem.vue";
import { onMounted, ref } from "vue";
import { useTaskStore } from "@/stores/task";
import heroImage from "@/assets/hero.jpg";

const taskStore = useTaskStore();

onMounted(() => {
  taskStore.fetchTasks();
});

const loadingMessage = ref([
  "Fetching awesome tasks...",
  "Getting your tasks ready...",
  "Loading tasks...",
]);

const randomNumber = ref(
  Math.floor(Math.random() * loadingMessage.value.length)
);
</script>

<template>
  <div class="hero" :style="{ backgroundImage: `url(${heroImage})` }">
    <div class="task-container">
      <div class="form-section">
        <h1>Welcome to Simplify</h1>
        <p class="subtitle">Your personal task management solution</p>
        <TaskForm />
      </div>

      <div class="tasks-section">
        <div class="loading" v-if="taskStore.loading">
          <div class="spinner"></div>
          <p>{{ loadingMessage.value[randomNumber.value] }}</p>
        </div>

        <div class="error" v-else-if="taskStore.error">
          <div class="error-container">
            <div class="error-icon">⚠️</div>
            <p class="error-message">
              Error:
              {{ taskStore.error?.message || "An unexpected error occurred." }}
            </p>
            <p class="error-suggestion">Please try again later.</p>
          </div>
        </div>

        <div class="results" v-else>
          <div class="pending">
            <h2>Pending Tasks</h2>
            <div class="task-content">
              <p
                v-if="taskStore.pendingTasks.length === 0"
                class="empty-message"
              >
                No pending tasks. Add one!
              </p>
              <TaskItem
                v-else
                v-for="task in taskStore.pendingTasks"
                :key="task.id"
                :task="task"
              />
            </div>
          </div>

          <div class="completed">
            <h2>Completed Tasks</h2>
            <div class="task-content">
              <p
                v-if="taskStore.completedTasks.length === 0"
                class="empty-message"
              >
                No completed tasks yet.
              </p>
              <TaskItem
                v-else
                v-for="task in taskStore.completedTasks"
                :key="task.id"
                :task="task"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="features">
    <div class="features-content">
      <h2>Why Choose Simplify</h2>

      <div class="features-grid">
        <div class="feature-card">
          <h3>Effortless Organization</h3>
          <p>
            Keep your tasks organized with our intuitive interface. Separate
            views for pending and completed tasks help you stay focused on what
            matters.
          </p>
        </div>

        <div class="feature-card">
          <h3>Beautiful Design</h3>
          <p>
            Experience task management in a visually stunning environment. Our
            clean, modern design makes staying productive a pleasure.
          </p>
        </div>

        <div class="feature-card">
          <h3>Real-time Updates</h3>
          <p>
            See your progress instantly as you complete tasks. Our responsive
            interface ensures your task list is always up to date.
          </p>
        </div>

        <div class="feature-card">
          <h3>Seamless Experience</h3>
          <p>
            Add, complete, and manage tasks with ease. Our streamlined workflow
            helps you accomplish more in less time.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 86vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

.task-container {
  width: 100%;
  max-width: 1400px;
  display: flex;
  gap: 40px;
  justify-content: space-between;
}

.form-section {
  width: 40%;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(70px);
  border-radius: 20px;
}

.form-section h1 {
  color: var(--primary);
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  color: var(--text-lt);
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.tasks-section {
  width: 60%;
  display: flex;
  flex-direction: column;
}

/* === Loading State === */
.loading {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(70px);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: var(--text-lt);
}

.spinner {
  border: 5px solid rgba(255, 255, 255, 0.2);
  border-top: 5px solid var(--primary);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* === Error State === */
.error {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(70px);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.error-icon {
  font-size: 2rem;
  color: var(--accent);
}

.error-message {
  color: var(--accent);
  font-weight: bold;
}

.error-suggestion {
  color: var(--text-lt);
  opacity: 0.8;
}

.results {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pending,
.completed {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(70px);
  border-radius: 20px;
  padding: 20px;
}

.pending h2,
.completed h2 {
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.task-content {
  max-height: 200px;
  overflow-y: auto;
  padding-right: 10px;
}

.task-content::-webkit-scrollbar {
  width: 8px;
}

.task-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.task-content::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 4px;
}

.features {
  padding: 60px 20px;
  background: var(--text-dr);
}

.features-content {
  max-width: 1200px;
  margin: 0 auto;
}

.features h2 {
  color: var(--primary);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 20px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: var(--slate);
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.feature-card p {
  color: var(--text-lt);
  line-height: 1.6;
}

/* Empty message */
.empty-message {
  color: var(--text-lt);
  font-style: italic;
  text-align: center;
  padding: 10px;
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .task-container {
    flex-direction: column;
  }

  .form-section,
  .tasks-section {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 20px;
  }

  .form-section {
    padding: 20px;
  }

  .form-section h1 {
    font-size: 2rem;
  }

  .features {
    padding: 40px 20px;
  }

  .features h2 {
    font-size: 2rem;
  }
}
</style>
