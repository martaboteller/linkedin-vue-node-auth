<template>
  <div style="margin-right: 20%; margin-left: 20%">
    <v-flex>
      <v-card>
        <v-toolbar dark><v-toolbar-title>Message</v-toolbar-title></v-toolbar
        ><v-card-text> {{ message.text }}</v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  async created() {
    this.message = (
      await this.$store.dispatch('getMessage', this.$route.params.id)
    ).data;
  },
};
</script>
