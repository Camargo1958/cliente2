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
            @click=""
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
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
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'Account', icon: 'account_box' },
        { title: 'Admin', icon: 'gavel' },
      ],
    };
  },
  methods: {
    setDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
