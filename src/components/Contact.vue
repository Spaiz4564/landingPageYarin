<template>
  <section
    id="contact"
    class="contact_section"
    v-scroll-reveal="{
      reset: false,
      duration: 1850,
      origin: 'bottom',
      distance: '20px',
    }"
  >
    <div class="contact_container">
      <google-map />
      <div class="text">
        <h1>
          למענה מהיר התקשרו: <a :href="'tel:' + phoneNumber">08-9331193</a>
        </h1>
        <h2>נס ציונה, קמפוס יובלים, בנין D, קומה 1.</h2>
        <form class="form" @submit.prevent="submitForm" method="POST">
          <div class="inputs">
            <div class="form_input">
              <label class="label" for="full-name">שם מלא</label>
              <input
                v-model="formData.fullName"
                class="input"
                id="full-name"
                type="text"
                name="full-name"
                required
              />
            </div>
            <div class="form_input">
              <label class="label" for="number">מס' טלפון</label>
              <input
                v-model="formData.number"
                class="input"
                id="number"
                type="text"
                name="number"
                required
              />
            </div>
          </div>
          <button
            :disabled="loading"
            :aria-disabled="!acceptTerms || loading"
            :title="!acceptTerms ? 'יש לאשר את התנאים כדי לשלוח' : null"
            type="submit"
            class="submit_form"
          >
            <span :class="['btn_text', { loading: loading }]">{{
              btnText
            }}</span>
            <span v-if="loading" class="loading-animation"></span>
          </button>
          <div class="checkbox">
            <input
              v-model="acceptTerms"
              @change="showTermsError = false"
              type="checkbox"
              id="checkbox"
              name="checkbox"
              required
              :aria-invalid="!acceptTerms && showTermsError ? 'true' : 'false'"
              :aria-describedby="
                !acceptTerms && showTermsError ? 'terms-error' : null
              "
            />
            <label for="checkbox">
              אני מאשר/ת ומסכים/ה כי הפרטים שאמסור ישמשו לצורך יצירת קשר וקבלת
              ייעוץ מד"ר ירין שילון וכל מי מטעמו. ידוע לי כי מסירת המידע היא
              מרצוני החופשי.</label
            >
            <p
              v-if="!acceptTerms && showTermsError"
              id="terms-error"
              class="field_error"
              role="alert"
            >
              יש לאשר את התנאים כדי לשלוח את הטופס
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { createScrollRevealDirective } from "vue-scroll-reveal";
import axios from "axios";
import GoogleMap from "./GoogleMap";

export default {
  name: "ContactSection",
  components: { GoogleMap },
  directives: {
    "scroll-reveal": createScrollRevealDirective(),
  },
  data() {
    return {
      loading: false,
      submitted: false,
      showTermsError: false,
      acceptTerms: false,
      phoneNumber: "08-9331193",
      formData: {
        fullName: "",
        number: "",
      },
    };
  },
  computed: {
    btnText() {
      return this.submitted ? "פנייתך התקבלה בהצלחה" : "שליחה";
    },
    isSubmitDisabled() {
      return this.loading;
    },
  },
  methods: {
    submitForm() {
      if (!this.acceptTerms) {
        this.showTermsError = true;
        this.$nextTick(() => {
          const el = document.getElementById("checkbox");
          if (el) el.focus();
        });
        return;
      }
      this.loading = true;
      axios
        .post("https://formspree.io/f/xdoqenbl", this.formData)
        .then((response) => {
          this.submitted = true;
          console.log("Form submitted successfully:", response.data);
          // Track Google Analytics conversion
          if (typeof window.gtag === "function") {
            window.gtag("event", "conversion", {
              send_to: "AW-17665671166/vBgQCOax1NMbEP7_0udB",
            });
          }
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
            this.resetInputs();
          }, 1100);
        });
    },

    resetInputs() {
      this.formData = {
        fullName: "",
        number: "",
      };
      this.acceptTerms = false;
      this.showTermsError = false;
    },
  },
};
</script>

<style>
.submit_form {
  position: relative;
  overflow: hidden;
}

.loading-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #805a49ea;
  animation: loading 2s ease-out;
  padding: 1.2rem;
}

@keyframes loading {
  to {
    width: 100%;
  }
}

.field_error {
  color: #d93025;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>
