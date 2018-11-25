<template lang="pug">
  v-app
    v-navigation-drawer(
      app
      clipped
      v-model="drawer"
    )
    v-toolbar(app color="amber")
      v-toolbar-side-icon(@click.stop="setDrawer()")
      span Application
    v-content
      v-container(fluid)
        router-view
    v-footer(app)
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    setDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
