<template>
  <footer class="footer">
    <a
      href="https://spaiz4564.github.io/YarinPrivacy/"
      target="_blank"
      rel="noopener"
      class="footer-link"
    >
      הצהרת נגישות
    </a>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
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
</style>
