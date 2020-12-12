<template>
  <div class="greeting-list">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="items"
            :items-per-page.sync="options.itemsPerPage"
            :loading="isLoading"
            loading-text="Loading..."
            :options.sync="options"
            :server-items-length="totalItems"
            class="elevation-1"
            item-key="@id"
            show-select
            @update:options="onUpdateOptions"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>Greeting</v-toolbar-title>

                <v-spacer />

                <v-btn
                  color="primary"
                  dark
                  class="ml-2"
                  @click="addHandler"
                >
                  New Item
                </v-btn>
              </v-toolbar>
            </template>

            <ActionCell
              slot="item.action"
              slot-scope="props"
              :handle-edit="() => editHandler(props.item)"
              :handle-delete="() => deleteHandler(props.item)"
            />
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import list from '../../mixins/list'

export default {
  servicePrefix: 'greetings',
  components: {
    ActionCell: () => import('../../components/ActionCell'),
  },
  mixins: [list],
  data: () => ({
    headers: [
      { text: 'name', value: 'name' },
      {
        text: 'Actions',
        value: 'action',
        sortable: false,
      },
    ],
    selected: [],
  }),
  computed: {
    ...mapGetters('greeting', {
      items: 'list',
    }),
    ...mapFields('greeting', {
      deletedItem: 'deleted',
      error: 'error',
      isLoading: 'isLoading',
      resetList: 'resetList',
      totalItems: 'totalItems',
      view: 'view',
    }),
  },
  methods: {
    ...mapActions('greeting', {
      fetchAll: 'fetchAll',
      deleteItem: 'del',
    }),
  },
}
</script>
