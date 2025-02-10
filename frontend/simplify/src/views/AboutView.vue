<template>
  <div class="about-container">
    <div class="hero-section">
      <h1>About Simplify</h1>
      <p class="tagline">Streamline your day, achieve your way</p>
    </div>

    <div class="content">
      <section class="feature-section">
        <h2>Why Choose Simplify?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Intuitive Task Management</h3>
            <p>
              Experience seamless task organization with our user-friendly
              interface. Create, track, and complete tasks with just a few
              clicks.
            </p>
          </div>

          <div class="feature-card">
            <h3>Beautiful Design</h3>
            <p>
              Enjoy a visually stunning environment that makes task management a
              pleasure. Our carefully crafted interface helps you stay focused
              and motivated.
            </p>
          </div>

          <div class="feature-card">
            <h3>Stay Organized</h3>
            <p>
              Keep your tasks neatly categorized between pending and completed
              sections. Never lose track of what needs to be done.
            </p>
          </div>

          <div class="feature-card">
            <h3>Boost Productivity</h3>
            <p>
              Transform your productivity with our streamlined approach to task
              management. Simple, effective, and designed for success.
            </p>
          </div>
        </div>
      </section>

      <section class="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Simplify, we believe that productivity shouldn't be complicated.
          Our mission is to provide a beautiful, intuitive task management
          solution that helps you focus on what matters most - getting things
          done.
        </p>
      </section>

      <section class="story-section">
        <h2>Our Story</h2>
        <p>
          Born from the desire to make task management both effective and
          enjoyable, Simplify combines powerful functionality with elegant
          design. We understand that your time is valuable, which is why we've
          created a tool that works as efficiently as you do.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/hero.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}

.hero-section {
  text-align: center;
  padding: 80px 20px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.hero-section h1 {
  color: var(--primary);
  font-size: 3rem;
  margin-bottom: 20px;
}

.tagline {
  color: var(--text-lt);
  font-size: 1.5rem;
  font-weight: 300;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
}

section {
  margin-bottom: 60px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(70px);
  border-radius: 20px;
}

h2 {
  color: var(--primary);
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}

h3 {
  color: var(--slate);
  font-size: 1.5rem;
  margin-bottom: 15px;
}

p {
  color: var(--text-lt);
  line-height: 1.6;
  margin-bottom: 20px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.feature-card {
  padding: 25px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.mission-section,
.story-section {
  text-align: center;
}

/* Media Queries */
@media (max-width: 768px) {
  .content {
    padding: 30px 20px;
  }

  .hero-section {
    padding: 60px 20px;
  }

  .hero-section h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  section {
    padding: 20px;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
