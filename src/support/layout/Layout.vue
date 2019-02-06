<template>
  <v-app>
    <v-toolbar app color="amber">
      <v-toolbar-side-icon @click.stop="setDrawer()"></v-toolbar-side-icon>
      <span>Clientes</span>
    </v-toolbar>
    <v-content>
      <v-container fluid tag="router-view"></v-container>
    </v-content>
    <v-footer>app</v-footer>
    <v-navigation-drawer
        class="blue"
        dark
        clipped
        app
        v-model="drawer"
    >
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
          >
            <v-list-tile-action>
              <v-icon v-on:click="item.click">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Empresas', icon: 'business', click: 'listpj()' },
        { title: 'Pessoas', icon: 'account_box', click: 'listpf' },
        { title: 'Admin', icon: 'gavel', click: '' },
        { title: 'Sair', icon: 'exit_to_app', click: '' },
      ],
    };
  },
  methods: {
    setDrawer() {
      this.drawer = !this.drawer;
    },
    listpj() {
      this.$router.push({ name: 'PessoaJuridicaListar' });
    },
    listpf() {
      this.$router.push({ name: 'PessoaFisicaListar' });
    },
  },
};
</script>
