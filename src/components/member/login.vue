<template>
  <v-form>
    <v-container>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        outlined
        shaped
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        label="Password"
        :type="'password'"
        required
        outlined
        shaped
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <v-btn class="mr-4" color="primary" @click="submit">會員登入</v-btn>
      <v-btn class="mr-4" color="accent" @click="revoke">取消憑證</v-btn>
      <v-btn class="mr-4" color="primary" @click="getAll">付款資料</v-btn>
    </v-container>
  </v-form>
</template>
<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import User from "../../models/user";

export default {
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
  },
  data: () => ({
    user: new User("", "", "", ""),
    email: "",
    password: "",
  }),
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push("Password 至少8個英文或數字");
      !this.$v.password.required && errors.push("Password 必填");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("必須是一個有效的E-mail");
      !this.$v.email.required && errors.push("E-mail 必填");
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        alert("failure");
        return;
      }
      this.user.email = this.email;
      this.user.password = this.password;
      if (this.user.email && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push("/");
          },
          (error) => {
            switch (error.response.status) {
              case 500:
                alert("500 Internal Server Error ");
                break;
              case 400:
                alert("400 Bad Request and Email or password incorrect");
                break;
              default:
                break;
            }
          }
        );
      }
    },
    revoke() {
      this.$store.dispatch("auth/revoke_token").then(
        () => {
          localStorage.clear();
        },
        (err) => {
          console.log(err);
        }
      );
    },

    getAll() {
      this.$store.dispatch("auth/get_paydeatail").then(
        (res) => {
          console.log(res.data);
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>