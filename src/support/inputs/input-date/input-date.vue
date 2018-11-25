<template lang="pug">
  .input-date
    v-menu(
      :close-on-content-click="false"
      v-model="menu"
      :nudge-right="40"
      transition="scale-transition"
      min-width="290px")
      v-text-field(
        slot="activator"
        v-model="date"
        :label="label"
        prepend-icon="event"
        readonly
        :required="required")
      v-date-picker(v-model="date" @input="menu = false")
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: 'Date',
    },
    required: {
      type: Boolean,
    },
  },
  data() {
    return {
      menu: false,
    };
  },
  computed: {
    date: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
