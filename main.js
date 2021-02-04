const app = Vue.createApp({
  data() {
    return {
      name: { val: '', isValid: true },
      email: { val: '', isValid: true },
      message: { val: '', isValid: true },
      formIsValid: true,
      emailRule: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    };
  },

  methods: {
    validation() {
      if (this.name.val === '') {
        this.name.isValid = false;
        this.formIsValid = false;
      }

      if (this.email.val.search(this.emailRule) == -1) {
        this.email.isValid = false;
        this.formIsValid = false;
      }

      if (this.message.val === '') {
        this.message.isValid = false;
        this.formIsValid = false;
      }
    },

    submitForm() {
      this.validation();
      if (!this.formIsValid) {
        this.formIsValid = true;
        return;
      }
      alert('submit successfully');
    },

    clearErr(input) {
      input.isValid = true;
    },
  },
});

app.mount('#app');
