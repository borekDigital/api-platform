<template>
  <v-container fluid />
</template>

<script>

export default {
  name: 'GreetingFilter',
  props: {
    values: {
      type: Object,
      required: true,
    },
  },

  computed: {
    // eslint-disable-next-line
    item() {
      return this.initialValues || this.values
    },
  },
  mounted () {
  },
  methods: {
  },
}
</script>
