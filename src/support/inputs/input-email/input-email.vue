<template lang="pug">
  .input-email
    v-text-field(
      v-model="email"
      :label="label"
      :required="required"
      :rules="rules"
      type="email"
    )
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
      default: 'Email',
    },
    required: {
      type: Boolean,
    },
  },
  data() {
    return {
      rules: [
        value => !!value || 'Email é requerido.',
        (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Email inválido.';
        },
      ],
    };
  },
  computed: {
    email: {
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
