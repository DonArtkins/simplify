import { defineStore } from "pinia";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [],
    loading: false,
    error: null,
  }),
  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    pendingTasks: (state) => state.tasks.filter((task) => !task.completed),
  },
  actions: {
    async fetchTasks() {
      this.loading = true;
      this.tasks = [];
      this.error = null;
      try {
        const response = await axios.get(`${API_BASE_URL}/tasks`);
        this.tasks = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async addTask(task) {
      try {
        const response = await axios.post(`${API_BASE_URL}/tasks`, task);
        this.tasks.unshift(response.data); // Add to beginning of array for immediate display
      } catch (error) {
        this.error = error;
      }
    },
    async updateTask(task) {
      try {
        const response = await axios.put(
          `${API_BASE_URL}/tasks/${task.id}`,
          task
        );
        const index = this.tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          this.tasks[index] = response.data; //update the task
        }
      } catch (error) {
        this.error = error;
      }
    },
    async deleteTask(id) {
      try {
        await axios.delete(`${API_BASE_URL}/tasks/${id}`);
        this.tasks = this.tasks.filter((task) => task.id !== id);
      } catch (error) {
        this.error = error;
      }
    },
  },
});
