<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="footer-main">
        <div class="footer-logo">
          <RouterLink to="/" class="logo">
            <p>Simp<span>lify.</span></p>
          </RouterLink>
          <p class="tagline">Streamline your day, achieve your way</p>
        </div>

        <div class="footer-links">
          <h3>Quick Links</h3>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/services">Services</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
        </div>

        <div class="footer-contact">
          <h3>Contact</h3>
          <RouterLink to="/contact">Contact Us</RouterLink>
          <a href="mailto:contact@simplify.com">contact@simplify.com</a>
          <p>London, Nakuru</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          &copy; {{ new Date().getFullYear() }} Simplify. All rights reserved.
        </p>
        <div class="creator">
          <span>Created by</span>
          <a
            href="https://opiyodon.vercel.com"
            target="_blank"
            class="creator-link"
          >
            Artkins
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: rgba(245, 212, 140, 0.95);
  backdrop-filter: blur(10px);
  padding: 50px 100px 20px;
  color: var(--text-dr);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(160, 39, 17, 0.2);
}

.footer-logo .logo {
  text-decoration: none;
}

.footer-logo p {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-dr);
  margin-bottom: 10px;
}

.footer-logo span {
  color: var(--accent);
}

.tagline {
  font-size: 1rem;
  color: var(--text-dr);
  opacity: 0.8;
}

.footer-links,
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h3 {
  color: var(--accent);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.footer-links a,
.footer-contact a {
  color: var(--text-dr);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover,
.footer-contact a:hover {
  color: var(--accent);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  font-size: 0.9rem;
}

.creator {
  display: flex;
  align-items: center;
  gap: 5px;
}

.creator-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.creator-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  footer {
    padding: 40px 30px 20px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }

  .footer-links,
  .footer-contact {
    align-items: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>
