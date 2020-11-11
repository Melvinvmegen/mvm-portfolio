<template lang="pug">
  .row.justify-center.contact-container.col-lg-9.col-md-10.col-sm-8.col-9
    form.col-lg-10(ref="form")
      h2.text-center Formulaire de contact
      br
      v-alert(v-if="success" dense elevation="2" type="success") {{ success }}
      v-alert(v-if="error" dense elevation="2" type="warning") {{ error }}
      .d-flex.justify-center(v-if='isLoading')
        Spinner
      v-text-field#name.form-control(
      label="Nom",
      type="text",
      v-model.lazy="contactData.name",
      @blur="$v.contactData.name.$touch()"
      :class="{ 'error--text': $v.contactData.name.$error }"
      )
      v-text-field#firstname.form-control( 
      label="Prénom",
      type="text",
      v-model.lazy="contactData.firstname",
      @blur="$v.contactData.firstname.$touch()"
      :class="{ 'error--text': $v.contactData.firstname.$error }"
      )
      v-text-field#email.form-control( 
      label="Email",
      type="text",
      v-model.lazy="contactData.email",
      @blur="$v.contactData.email.$touch()"
      :class="{ 'error--text': $v.contactData.email.$error }"
      )
      v-text-field#phone.form-control( 
      label="Téléphone",
      type="text",
      v-model.lazy="contactData.phone",
      @blur="$v.contactData.phone.$touch()"
      :class="{ 'error--text': $v.contactData.phone.$error }"
      )
      v-textarea#query.form-control(
      label="Demande",
      type="text",
      auto-grow,
      v-model.lazy="contactData.query",
      @blur="$v.contactData.query.$touch()"
      :class="{ 'error--text': $v.contactData.query.$error }"
      )
      .d-flex
        .form-button.my-2.mr-2
          v-btn(color='success' :disabled="$v.$invalid" @click.prevent="onSubmit" ref="button")
            | Prendre contact
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import axios from 'axios'

export default {
  name: "ContactForm",
  data: function() {
    return {
      contactData: {
        name: "",
        firstname: "",
        email: "",
        phone: "",
        query: ""
      },
      error: "",
      success: null,
      isLoading: false
    };
  },
  validations: {
    contactData: {
      name: {
        required
      },
      firstname: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        required
      },
      query: {
        required
      }
    }
  },
  methods: {
    onSubmit() {
      this.isLoading = true
      axios
        .post("api/contacts", {
          name: this.contactData.name,
          firstname: this.contactData.firstname,
          email: this.contactData.email,
          phone: this.contactData.phone,
          query: this.contactData.query
        })
        .then(() => {
          let self = this;
          Object.keys(this.contactData).forEach(function(key) {
            self.contactData[key] = "";
          });
          this.$v.$reset();
          this.isLoading = false
          this.success = "Votre prise de contact a bien été envoyée";
        })
        .catch(error => {
          if (error) {
            this.isLoading = false
            this.setError(error, "Une erreur s'est produite, veuillez réessayer plus tard.");
          }
        });
    },
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text;
    }
  }
};
</script>

<style>
.contact-img {
  max-width: 300px !important;
  position: absolute;
  top: 0;
  left: 29%;
  z-index: 3;
  transform: translate(-90%);
}

.contact-container {
  box-shadow: rgba(0, 0, 0, 0.03) 0px 24px 32px,
    rgba(0, 0, 0, 0.06) 0px 8px 32px;
  padding: 62px;
  margin: -5vh 30px -5vh;
  position: absolute;
  left: -3vh;
  bottom: 0;
  z-index: 2;
  background: white;
  border-radius: 4%;
}

.error--text label {
  color: #dd2c00 !important;
}

.error--text .v-input__slot:before {
  border-color: #dd2c00 !important;
}

@media only screen and (max-width: 960px) {
  .contact-container {
    bottom: -50vh;
  }

  .contact-container {
    left: 0 !important;
    right: 0;
    margin: auto;
  }

  .contact-img {
    width: 250px;
    top: -5vh !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
}

@media only screen and (max-width: 600px) {
  .contact-img {
    width: 220px;
    top: 0vh !important;
  }
}

@media only screen and (max-width: 500px) {
  .contact-container {
    bottom: -50vh;
    padding: 40px !important;
  }

  .contact-img {
    top: -2vh !important;
  }
}

@media only screen and (max-width: 450px) {
  .contact-img {
    width: 180px;
  }
}

@media only screen and (max-width: 370px) {
  .contact-img {
    width: 170px;
  }
}
</style>
