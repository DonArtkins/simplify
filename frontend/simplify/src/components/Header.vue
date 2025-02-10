<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import heroImage from "@/assets/hero.jpg";

const route = useRoute();
const isMenuOpen = ref(false);

const handleClickOutside = (e) => {
  const navbar = e.target.closest(".navbar");
  if (!navbar && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const isActiveRoute = (link) => {
  const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
  return route.path === path;
};

const handleLinkClick = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header>
    <nav class="navbar">
      <RouterLink to="/" class="logo">
        <div class="nav-image">
          <img :src="heroImage" alt="logo" />
        </div>
        <p>Simp<span>lify.</span></p>
      </RouterLink>

      <menu>
        <ul :class="{ active: isMenuOpen }">
          <li
            v-for="link in ['Home', 'About', 'Services', 'Blog', 'Contact']"
            :key="link"
          >
            <RouterLink
              :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
              class="nav-link"
              :class="{ active: isActiveRoute(link) }"
              @click="handleLinkClick"
            >
              {{ link }}
            </RouterLink>
          </li>
        </ul>
      </menu>

      <button
        class="hamburger"
        :class="{ active: isMenuOpen }"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(245, 212, 140, 0.95);
  backdrop-filter: blur(10px);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 100px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.nav-image {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--accent);
  padding: 2px;
  background: var(--primary);
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.4s ease-in-out;
}

.logo:hover img {
  transform: rotate(360deg);
}

.logo p {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dr);
}

.logo p span {
  color: var(--accent);
}

menu ul {
  display: flex;
  gap: 30px;
  font-weight: 500;
}

.nav-link {
  position: relative;
  color: var(--text-dr);
  font-size: 1.1rem;
  padding: 5px 10px;
  transition: color 0.3s ease;
}

.nav-link::before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.3s ease;
}

.nav-link:hover::before,
.nav-link.active::before {
  width: 100%;
}

.nav-link:hover,
.nav-link.active {
  color: var(--accent);
}

.hamburger {
  display: none;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 5px;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: var(--accent);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .navbar {
    padding: 15px 30px;
  }

  .hamburger {
    display: block;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  menu ul {
    position: fixed;
    right: -100%;
    top: 80px;
    gap: 25px;
    flex-direction: column;
    background: rgba(245, 212, 140, 0.95);
    backdrop-filter: blur(10px);
    width: 70%;
    height: auto;
    padding: 30px 0;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease-in-out;
    display: none;
  }

  menu ul.active {
    right: 15px;
    display: block;
  }

  .nav-link {
    display: block;
    padding: 10px 30px;
  }
}
</style>
