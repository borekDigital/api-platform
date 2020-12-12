<!-- TODO : Use this for create / update !! -->
<template>
  <div>
    <Toolbar
      :handle-submit="onSendForm"
      :handle-reset="resetForm"
      :handle-delete="del"
    >
      <template #left>
        <h1 v-if="item">
          Edit {{ item['@id'] }}
        </h1>
      </template>
    </Toolbar>
    <GreetingForm
      v-if="item"
      ref="updateForm"
      :values="item"
      :errors="violations"
    />
    <Loading :visible="deleteLoading" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import update from '../../mixins/update'

const servicePrefix = 'greetings'

export default {
  servicePrefix,
  components: {
    Loading: () => import('../../components/Loading'),
    Toolbar: () => import('../../components/Toolbar'),
    GreetingForm: () => import('../../components/greeting/Form.vue'),
  },
  mixins: [update],

  computed: {
    ...mapFields('greeting', {
      deleteLoading: 'isLoading',
      isLoading: 'isLoading',
      error: 'error',
      updated: 'updated',
      violations: 'violations',
    }),
    ...mapGetters('greeting', ['find']),

  },

  methods: {
    ...mapActions('greeting', {
      createReset: 'resetCreate',
      deleteItem: 'del',
      delReset: 'resetDelete',
      retrieve: 'load',
      update: 'update',
      updateReset: 'resetUpdate',
    }),
  },
}
</script>
