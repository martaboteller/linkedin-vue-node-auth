<template>
  <div style="margin-right: 20%; margin-left: 20%">
    <v-flex>
      <v-card>
        <v-toolbar dark><v-toolbar-title>Messages</v-toolbar-title></v-toolbar>
        <v-list>
          <v-list-item
            v-for="(message, index) in $store.state.messages"
            :key="index"
            :to="'messages/' + index"
          >
            <v-list-item-content>
              <v-list-item-title v-text="message.text"></v-list-item-title>
              <v-list-item-subtitle
                v-text="message.user"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
//import store from '../store.js';

export default {
  async created() {
    this.$store.dispatch('getMessages');
  },
};
</script>
