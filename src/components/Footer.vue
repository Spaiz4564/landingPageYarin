<template>
  <footer class="footer">
    <div class="footer-content">
      <a
        href="https://spaiz4564.github.io/YarinPrivacy/"
        target="_blank"
        rel="noopener"
        class="footer-link"
      >
        מדיניות פרטיות
      </a>
      <div class="copyright">
        © {{ currentYear }} כל הזכויות שמורות לירין שילון
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 2rem 0 1.5rem 0;
  background: rgba(255, 217, 192, 0.12);
  text-align: center;
  font-size: 1.3rem;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.03);
  letter-spacing: 0.02em;
  direction: rtl;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-link {
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  padding: 0.25em 0.75em;
  border-radius: 4px;
  display: inline-block;
}

.footer-link:hover,
.footer-link:focus {
  color: #0d47a1;
  background: #f0f7ff;
  text-decoration: underline;
  outline: none;
}

.copyright {
  color: #666;
  font-size: 1.1rem;
  font-weight: 400;
  opacity: 0.8;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .footer-content {
    gap: 0.75rem;
  }

  .copyright {
    font-size: 1rem;
  }
}
</style>
