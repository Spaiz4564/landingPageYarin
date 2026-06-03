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

      <div class="footer-credits">
        <span class="credit-item">
          © {{ currentYear }} כל הזכויות שמורות לירין שילון
        </span>
        <span class="credit-divider" aria-hidden="true">|</span>
        <span class="credit-item lumina">
          פותח על ידי <strong>Lumina</strong>
        </span>
        <span class="credit-divider" aria-hidden="true">|</span>
        <span class="credit-item lumina">
          כל הזכויות על העיצוב והקוד שמורות ל-<strong>Lumina</strong>
        </span>
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
  padding: 2rem 2rem 1.75rem;
  background: rgba(255, 217, 192, 0.2);
  text-align: center;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.03);
  direction: rtl;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-link {
  color: #1976d2;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
  transition: color 0.2s;
  padding: 0.25em 0.75em;
  border-radius: 4px;
}

.footer-link:hover,
.footer-link:focus {
  color: #0d47a1;
  background: #f0f7ff;
  text-decoration: underline;
  outline: none;
}

.footer-credits {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem 1.25rem;
  width: 100%;
  font-size: 1.15rem;
  font-weight: 500;
  color: #2a2a2a;
  line-height: 1.4;
}

.credit-item strong {
  font-weight: 700;
  color: #111;
}

.credit-item.lumina {
  color: #1a1a1a;
}

.credit-divider {
  color: #c4c4c4;
  font-weight: 300;
  user-select: none;
}

@media (max-width: 900px) {
  .footer-credits {
    font-size: 1.05rem;
    gap: 0.5rem 0.85rem;
  }

  .credit-divider {
    display: none;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 1rem;
  }

  .footer-credits {
    font-size: 1rem;
  }
}
</style>
