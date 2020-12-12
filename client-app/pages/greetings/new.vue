<template>
  <div>
    <Toolbar :handle-submit="onSendForm" :handle-reset="resetForm" />
    <GreetingForm ref="createForm" :values="item" :errors="violations" />
    <Loading :visible="isLoading" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { createHelpers } from 'vuex-map-fields'
import create from '../../mixins/create'

const servicePrefix = 'greetings'

const { mapFields } = createHelpers({
  getterType: 'greeting/getField',
  mutationType: 'greeting/updateField',
})

export default {
  servicePrefix,
  components: {
    Loading: () => import('../../components/Loading'),
    Toolbar: () => import('../../components/Toolbar'),
    GreetingForm: () => import('../../components/greeting/Form'),
  },
  mixins: [create],
  data: () => ({
    item: {},
  }),
  computed: {
    ...mapFields(['error', 'isLoading', 'created', 'violations']),
  },
  methods: {
    ...mapActions('greeting', ['create', 'reset']),
  },
}
</script>
