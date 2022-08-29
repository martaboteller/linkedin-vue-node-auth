<template>
  <div class="myFontStyle">
    <v-app-bar app>
      <v-btn text to="/">Messages</v-btn>
      <v-btn text to="/NewMessage">New Message</v-btn>
      <v-spacer />
      <v-btn text v-if="!$store.state.token" to="/Register">Register</v-btn>
      <v-btn text v-if="!$store.state.token" to="/Login">Login</v-btn>
      <v-btn text v-if="$store.state.token" @click="$store.commit('logout')"
        >Logout</v-btn
      >
    </v-app-bar>

    <v-main>
      <br />
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => {
    return {};
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');

.myFontStyle {
  font-family: 'Roboto';
  font-size: x-large;
  font-weight: 400;
}
</style>
