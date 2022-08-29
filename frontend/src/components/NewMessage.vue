<template>
  <div style="margin-right: 20%; margin-left: 20%">
    <v-flex>
      <v-card>
        <v-toolbar dark
          ><v-toolbar-title>New Message</v-toolbar-title></v-toolbar
        >
        <v-form>
          <v-container>
            <v-layout>
              <v-flex xs12>
                <v-text-field
                  label="Message"
                  v-model="messageBody"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-btn style="margin: 2%" v-on:click="submit">submit</v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageBody: '',
    };
  },

  methods: {
    async submit() {
      try {
        this.$store.dispatch('newMessage', this.messageBody);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
