<template>
  <div style="margin-right: 20%; margin-left: 20%">
    <v-flex>
      <v-card>
        <v-toolbar dark><v-toolbar-title>Login</v-toolbar-title></v-toolbar>
        <v-form>
          <v-container>
            <v-layout>
              <v-flex xs12>
                <v-text-field
                  label="Username"
                  v-model="userName"
                  required
                ></v-text-field>
                <v-text-field
                  label="Password"
                  type="password"
                  v-model="password"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-btn style="margin: 2%" v-on:click="login">Login</v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
    };
  },

  methods: {
    async login() {
      this.$store.dispatch('login', {
        userName: this.userName,
        password: this.password,
      });
    },
  },
};
</script>
