<template lang="pug">
  .btn-save
    v-btn(
      color="success"
      type="button"
      @click.stop="save($event)"
    ) Salvar
</template>

<script>
export default {
  methods: {
    save($event) {
      this.$emit('save', $event);
    },
  },
};
</script>
